const pool = require('../config/db');

const getMembers = async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name FROM members');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).send('Error fetching members');
  }
};

const joinMember = async (req, res) => {
  try {
    const { name, email, phoneNumber, address, occupation } = req.body;
    const query = 'INSERT INTO members (name, email, phoneNumber, address, occupation) VALUES ($1, $2, $3, $4, $5)';
    await pool.query(query, [name, email, phoneNumber, address, occupation]);
    res.status(201).send('Join application received');
  } catch (error) {
    res.status(500).send('Error saving join application');
  }
};

module.exports = { getMembers, joinMember };
