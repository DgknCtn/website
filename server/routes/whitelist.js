const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const pool = require('../config/db');
const logger = require('../config/logger');
const auth = require('../middleware/auth');

// Validation middleware
const whitelistValidation = [
  body('walletAddress')
    .trim()
    .notEmpty()
    .matches(/^0x[a-fA-F0-9]{40}$/)
    .withMessage('Invalid Ethereum wallet address'),
  body('discordUsername')
    .trim()
    .notEmpty()
    .matches(/^.{2,32}(#\d{4})?$/)
    .withMessage('Invalid Discord username')
];

// Create whitelist entry
router.post('/', whitelistValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { walletAddress, discordUsername } = req.body;

  try {
    const [result] = await pool.query(
      'INSERT INTO whitelist (wallet_address, discord_username) VALUES (?, ?)',
      [walletAddress, discordUsername]
    );

    // Log the action
    await pool.query(
      'INSERT INTO audit_logs (table_name, record_id, action, new_values) VALUES (?, ?, ?, ?)',
      ['whitelist', result.insertId, 'create', JSON.stringify({ walletAddress, discordUsername })]
    );

    res.status(201).json({
      message: 'Successfully added to whitelist',
      id: result.insertId
    });
  } catch (error) {
    logger.error('Whitelist creation error:', error);

    if (error.code === 'ER_DUP_ENTRY') {
      if (error.message.includes('wallet_address')) {
        return res.status(409).json({ error: 'This wallet address is already whitelisted' });
      }
      if (error.message.includes('discord_username')) {
        return res.status(409).json({ error: 'This Discord username is already whitelisted' });
      }
      return res.status(409).json({ error: 'This entry already exists in the whitelist' });
    }

    res.status(500).json({ error: 'An error occurred while adding to whitelist' });
  }
});

// Get all whitelist entries (admin only)
router.get('/', auth(['admin']), async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM whitelist WHERE deleted_at IS NULL ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (error) {
    logger.error('Whitelist fetch error:', error);
    res.status(500).json({ error: 'An error occurred while fetching whitelist entries' });
  }
});

// Update whitelist entry status (admin only)
router.patch('/:id/status', auth(['admin']), [
  body('status')
    .isIn(['pending', 'approved', 'rejected'])
    .withMessage('Invalid status')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const { status } = req.body;

  try {
    const [oldEntry] = await pool.query(
      'SELECT * FROM whitelist WHERE id = ?',
      [id]
    );

    if (oldEntry.length === 0) {
      return res.status(404).json({ error: 'Whitelist entry not found' });
    }

    await pool.query(
      'UPDATE whitelist SET status = ? WHERE id = ?',
      [status, id]
    );

    // Log the action
    await pool.query(
      'INSERT INTO audit_logs (table_name, record_id, action, old_values, new_values, user_id) VALUES (?, ?, ?, ?, ?, ?)',
      [
        'whitelist',
        id,
        'update',
        JSON.stringify({ status: oldEntry[0].status }),
        JSON.stringify({ status }),
        req.user.id
      ]
    );

    res.json({ message: 'Status updated successfully' });
  } catch (error) {
    logger.error('Whitelist status update error:', error);
    res.status(500).json({ error: 'An error occurred while updating status' });
  }
});

// Soft delete whitelist entry (admin only)
router.delete('/:id', auth(['admin']), async (req, res) => {
  const { id } = req.params;

  try {
    const [oldEntry] = await pool.query(
      'SELECT * FROM whitelist WHERE id = ?',
      [id]
    );

    if (oldEntry.length === 0) {
      return res.status(404).json({ error: 'Whitelist entry not found' });
    }

    await pool.query(
      'UPDATE whitelist SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?',
      [id]
    );

    // Log the action
    await pool.query(
      'INSERT INTO audit_logs (table_name, record_id, action, old_values, user_id) VALUES (?, ?, ?, ?, ?)',
      [
        'whitelist',
        id,
        'delete',
        JSON.stringify(oldEntry[0]),
        req.user.id
      ]
    );

    res.json({ message: 'Entry deleted successfully' });
  } catch (error) {
    logger.error('Whitelist delete error:', error);
    res.status(500).json({ error: 'An error occurred while deleting entry' });
  }
});

module.exports = router;
