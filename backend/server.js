// Import dependencies
const { Pool } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Database connection
const pool = new Pool({
  user: 'nyandieka',        // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'sacco',
  password: 'Sayona',    // Replace with your PostgreSQL password
  port: 5432,
});

// Endpoint to get members (for the guarantor dropdown)
app.get('/api/members', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name FROM members');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).send('Error fetching members');
  }
});

// Endpoint to apply for a loan
app.post('/api/apply-loan', async (req, res) => {
  try {
    const { name, email, phoneNumber, loanAmount, loanPurpose, guarantorId } = req.body;
    const query = 'INSERT INTO loans (name, email, phoneNumber, loanAmount, loanPurpose, guarantor_id) VALUES ($1, $2, $3, $4, $5, $6)';
    await pool.query(query, [name, email, phoneNumber, loanAmount, loanPurpose, guarantorId]);
    res.status(201).send('Loan application received');
  } catch (error) {
    console.error('Error saving loan application:', error);
    res.status(500).send('Error saving loan application');
  }
});

// Endpoint to join the SACCO
app.post('/api/join', async (req, res) => {
  try {
    const { name, email, phoneNumber, address, occupation } = req.body;
    const query = 'INSERT INTO members (name, email, phoneNumber, address, occupation) VALUES ($1, $2, $3, $4, $5)';
    await pool.query(query, [name, email, phoneNumber, address, occupation]);
    res.status(201).send('Join application received');
  } catch (error) {
    console.error('Error saving join application:', error);
    res.status(500).send('Error saving join application');
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
