const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 60000
}).promise();

// Test database connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Successfully connected to the database');
    connection.release();
    return true;
  } catch (error) {
    console.error('Database connection error:', error);
    return false;
  }
};

// Ethereum adresi validasyonu
const isValidEthereumAddress = (address) => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

// Discord kullanıcı adı validasyonu
const isValidDiscordUsername = (username) => {
  return /^.{3,32}#[0-9]{4}$/.test(username);
};

// Whitelist API endpoint'i
app.post('/api/whitelist', async (req, res) => {
  const { walletAddress, discordUsername } = req.body;
  console.log('Received whitelist request:', { walletAddress, discordUsername });

  // Input validasyonu
  if (!walletAddress || !discordUsername) {
    return res.status(400).json({ 
      error: 'Both wallet address and Discord username are required' 
    });
  }

  // Validate wallet address format
  if (!isValidEthereumAddress(walletAddress)) {
    return res.status(400).json({ 
      error: 'Invalid wallet address format' 
    });
  }

  // Validate Discord username format
  if (!isValidDiscordUsername(discordUsername)) {
    return res.status(400).json({ 
      error: 'Invalid Discord username format' 
    });
  }

  try {
    console.log('Attempting database insertion...');
    const [result] = await pool.query(
      'INSERT INTO whitelist (wallet_address, discord_username) VALUES (?, ?)',
      [walletAddress, discordUsername]
    );

    console.log('Database insertion successful:', result);
    res.status(201).json({
      message: 'Successfully added to whitelist',
      id: result.insertId
    });
  } catch (error) {
    console.error('Database error:', error);

    // Check for duplicate entry
    if (error.code === 'ER_DUP_ENTRY') {
      if (error.message.includes('wallet_address')) {
        return res.status(409).json({ 
          error: 'This wallet address is already whitelisted' 
        });
      }
      if (error.message.includes('discord_username')) {
        return res.status(409).json({ 
          error: 'This Discord username is already whitelisted' 
        });
      }
      return res.status(409).json({ 
        error: 'This entry already exists in the whitelist' 
      });
    }

    // Log detailed error information
    console.error('Database error details:', {
      code: error.code,
      errno: error.errno,
      sqlMessage: error.sqlMessage,
      sqlState: error.sqlState,
      sql: error.sql
    });

    res.status(500).json({ 
      error: 'An error occurred while adding to whitelist',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Whitelist durumu kontrolü endpoint'i
app.get('/api/whitelist/check', async (req, res) => {
  const { walletAddress, discordUsername } = req.query;

  if (!walletAddress && !discordUsername) {
    return res.status(400).json({ 
      error: 'Either wallet address or Discord username is required' 
    });
  }

  try {
    let query = 'SELECT * FROM whitelist WHERE ';
    let params = [];

    if (walletAddress) {
      query += 'wallet_address = ?';
      params.push(walletAddress);
    } else {
      query += 'discord_username = ?';
      params.push(discordUsername);
    }

    const [rows] = await pool.query(query, params);

    if (rows.length > 0) {
      res.json({ isWhitelisted: true, entry: rows[0] });
    } else {
      res.json({ isWhitelisted: false });
    }
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      error: 'An error occurred while checking whitelist status',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Admin için whitelist listesi endpoint'i
app.get('/api/whitelist/all', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM whitelist ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      error: 'An error occurred while fetching whitelist entries',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Tema rengi API endpoint'i
app.post('/api/theme', (req, res) => {
  const { color } = req.body;
  // Theme color implementation will be added later
  res.json({ success: true, color });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const startServer = async () => {
  // Test database connection first
  const isConnected = await testConnection();
  
  if (!isConnected) {
    console.error('Could not establish database connection. Server will not start.');
    process.exit(1);
  }

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
