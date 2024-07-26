const pool = require('../config/db');

const applyLoan = async (req, res) => {
  try {
    const { name, email, phoneNumber, loanAmount, loanPurpose, guarantorId } = req.body;
    const query = 'INSERT INTO loans (name, email, phoneNumber, loanAmount, loanPurpose, guarantor_id) VALUES ($1, $2, $3, $4, $5, $6)';
    await pool.query(query, [name, email, phoneNumber, loanAmount, loanPurpose, guarantorId]);
    res.status(201).send('Loan application received');
  } catch (error) {
    res.status(500).send('Error saving loan application');
  }
};

module.exports = { applyLoan };
