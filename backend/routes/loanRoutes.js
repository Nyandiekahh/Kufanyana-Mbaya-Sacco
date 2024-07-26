const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

router.post('/apply-loan', loanController.applyLoan);

module.exports = router;
