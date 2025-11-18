const express = require('express');
const cors = require('cors');
const { pool } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/companies', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM companies ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error('DB ERROR (companies):', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
