const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg'); // PostgreSQL client

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// PostgreSQL connection setup
const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432,
});

// Fetch transactions
app.get('/api/transactions', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM transactions');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Submit edits for approval
app.post('/api/approve-edits', async (req, res) => {
  const { edits } = req.body;

  // Validate the incoming data
  if (!Array.isArray(edits)) {
    return res.status(400).send('Invalid data');
  }

  try {
    // Insert pending edits into a temporary table or similar structure
    for (const edit of edits) {
      await pool.query(
        `INSERT INTO pending_edits (transaction_id, mpesa_code, status) VALUES ($1, $2, 'pending')`,
        [edit.transaction_id, edit.mpesa_code]
      );
    }

    res.status(200).send('Edits submitted for approval');
  } catch (error) {
    console.error('Error submitting edits:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Approve pending edits
app.post('/api/approve-pending-edits', async (req, res) => {
  const { editIds } = req.body;

  // Validate the incoming data
  if (!Array.isArray(editIds)) {
    return res.status(400).send('Invalid data');
  }

  try {
    // Approve edits by moving them from pending_edits to transactions
    for (const editId of editIds) {
      // Get the pending edit details
      const result = await pool.query('SELECT * FROM pending_edits WHERE id = $1', [editId]);
      const edit = result.rows[0];

      // Update the transaction with the new MPESA code
      await pool.query(
        'UPDATE transactions SET mpesa_code = $1 WHERE id = $2',
        [edit.mpesa_code, edit.transaction_id]
      );

      // Remove the edit from pending_edits
      await pool.query('DELETE FROM pending_edits WHERE id = $1', [editId]);
    }

    res.status(200).send('Edits approved');
  } catch (error) {
    console.error('Error approving edits:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
