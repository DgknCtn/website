const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const pool = require('../config/db');
const logger = require('../config/logger');
const auth = require('../middleware/auth');

// Get audit logs (admin only)
router.get('/audit-logs', auth(['admin']), async (req, res) => {
  try {
    const [logs] = await pool.query(
      `SELECT al.*, u.username as user_username 
       FROM audit_logs al 
       LEFT JOIN users u ON al.user_id = u.id 
       ORDER BY al.created_at DESC 
       LIMIT 100`
    );
    res.json(logs);
  } catch (error) {
    logger.error('Audit logs fetch error:', error);
    res.status(500).json({ error: 'An error occurred while fetching audit logs' });
  }
});

// Get system stats (admin only)
router.get('/stats', auth(['admin']), async (req, res) => {
  try {
    const [whitelistStats] = await pool.query(
      `SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending,
        SUM(CASE WHEN status = 'approved' THEN 1 ELSE 0 END) as approved,
        SUM(CASE WHEN status = 'rejected' THEN 1 ELSE 0 END) as rejected
       FROM whitelist 
       WHERE deleted_at IS NULL`
    );

    const [userStats] = await pool.query(
      `SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN role = 'admin' THEN 1 ELSE 0 END) as admins
       FROM users`
    );

    res.json({
      whitelist: whitelistStats[0],
      users: userStats[0]
    });
  } catch (error) {
    logger.error('Stats fetch error:', error);
    res.status(500).json({ error: 'An error occurred while fetching stats' });
  }
});

// Create admin user (super admin only)
router.post('/users', auth(['super_admin']), [
  body('username').trim().notEmpty().withMessage('Username is required'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('role').isIn(['admin', 'user']).withMessage('Invalid role')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password, email, role } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [result] = await pool.query(
      'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)',
      [username, hashedPassword, email, role]
    );

    // Log the action
    await pool.query(
      'INSERT INTO audit_logs (table_name, record_id, action, new_values, user_id) VALUES (?, ?, ?, ?, ?)',
      [
        'users',
        result.insertId,
        'create',
        JSON.stringify({ username, email, role }),
        req.user.id
      ]
    );

    res.status(201).json({
      message: 'User created successfully',
      id: result.insertId
    });
  } catch (error) {
    logger.error('User creation error:', error);

    if (error.code === 'ER_DUP_ENTRY') {
      if (error.message.includes('username')) {
        return res.status(409).json({ error: 'Username already exists' });
      }
      if (error.message.includes('email')) {
        return res.status(409).json({ error: 'Email already exists' });
      }
    }

    res.status(500).json({ error: 'An error occurred while creating user' });
  }
});

module.exports = router;
