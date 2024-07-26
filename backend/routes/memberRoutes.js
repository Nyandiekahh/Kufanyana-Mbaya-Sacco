const express = require('express');
const router = express.Router();
const memberModel = require('../models/member');

// Get all members
router.get('/members', async (req, res) => {
  try {
    const members = await memberModel.getAllMembers();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).send('Error fetching members: ' + error.message);
  }
});

// Get a member by ID
router.get('/members/:id', async (req, res) => {
  try {
    const member = await memberModel.getMemberById(req.params.id);
    if (member) {
      res.status(200).json(member);
    } else {
      res.status(404).send('Member not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching member: ' + error.message);
  }
});

// Add a new member
router.post('/members', async (req, res) => {
  try {
    const newMember = await memberModel.addMember(req.body);
    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).send('Error adding member: ' + error.message);
  }
});

// Update a member
router.put('/members/:id', async (req, res) => {
  try {
    const updatedMember = await memberModel.updateMember(req.params.id, req.body);
    if (updatedMember) {
      res.status(200).json(updatedMember);
    } else {
      res.status(404).send('Member not found');
    }
  } catch (error) {
    res.status(500).send('Error updating member: ' + error.message);
  }
});

// Delete a member
router.delete('/members/:id', async (req, res) => {
  try {
    const deletedMember = await memberModel.deleteMember(req.params.id);
    if (deletedMember) {
      res.status(200).json(deletedMember);
    } else {
      res.status(404).send('Member not found');
    }
  } catch (error) {
    res.status(500).send('Error deleting member: ' + error.message);
  }
});

module.exports = router;
