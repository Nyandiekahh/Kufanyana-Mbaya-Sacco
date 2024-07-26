const express = require('express');
const router = express.Router();
const joinController = require('../controllers/memberController'); // Assuming join functionality is in the same controller

router.post('/join', joinController.joinMember);

module.exports = router;
