const pool = require('../config/db');

// Get all members
const getAllMembers = async () => {
  const result = await pool.query('SELECT id, name FROM members');
  return result.rows;
};

// Get a member by ID
const getMemberById = async (id) => {
  const result = await pool.query('SELECT * FROM members WHERE id = $1', [id]);
  return result.rows[0];
};

// Add a new member
const addMember = async (member) => {
  const { name, email, phoneNumber, address, occupation } = member;
  const result = await pool.query(
    'INSERT INTO members (name, email, phoneNumber, address, occupation) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, email, phoneNumber, address, occupation]
  );
  return result.rows[0];
};

// Update a member
const updateMember = async (id, member) => {
  const { name, email, phoneNumber, address, occupation } = member;
  const result = await pool.query(
    'UPDATE members SET name = $1, email = $2, phoneNumber = $3, address = $4, occupation = $5 WHERE id = $6 RETURNING *',
    [name, email, phoneNumber, address, occupation, id]
  );
  return result.rows[0];
};

// Delete a member
const deleteMember = async (id) => {
  const result = await pool.query('DELETE FROM members WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
};
