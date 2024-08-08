// src/components/Transactions.js

import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios'; // Assuming you'll use axios for API requests

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [editableRow, setEditableRow] = useState(null);
  const [newMpesaCode, setNewMpesaCode] = useState('');
  const [approvalDialogOpen, setApprovalDialogOpen] = useState(false);
  const [pendingEdits, setPendingEdits] = useState([]);

  useEffect(() => {
    // Fetch initial transaction data
    axios.get('/api/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  const handleEditClick = (index) => {
    setEditableRow(index);
  };

  const handleSaveClick = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions[index] = { ...updatedTransactions[index], mpesaCode: newMpesaCode };
    setTransactions(updatedTransactions);
    setEditableRow(null);

    // Add the pending edit for admin approval
    setPendingEdits([...pendingEdits, updatedTransactions[index]]);
  };

  const handleApprovalDialogOpen = () => {
    setApprovalDialogOpen(true);
  };

  const handleApprovalDialogClose = () => {
    setApprovalDialogOpen(false);
  };

  const handleApproveEdits = () => {
    // Send the pending edits for admin approval
    axios.post('/api/approve-edits', { edits: pendingEdits })
      .then(response => {
        setPendingEdits([]);
        handleApprovalDialogClose();
      })
      .catch(error => console.error('Error approving edits:', error));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>2024 KMS Investment Transactions</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Period</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Transaction Cost</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Fully Paid</TableCell>
              <TableCell>MPESA Code</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.period || '-'}</TableCell>
                <TableCell>{transaction.name || '-'}</TableCell>
                <TableCell>{transaction.amount !== undefined ? `Ksh ${transaction.amount}` : '-'}</TableCell>
                <TableCell>{transaction.transactionCost !== undefined ? `Ksh ${transaction.transactionCost}` : '-'}</TableCell>
                <TableCell>{transaction.paid !== undefined ? `Ksh ${transaction.paid}` : '-'}</TableCell>
                <TableCell>{transaction.fullyPaid ? '✅' : '-'}</TableCell>
                <TableCell>
                  {editableRow === index ? (
                    <TextField
                      value={newMpesaCode}
                      onChange={(e) => setNewMpesaCode(e.target.value)}
                    />
                  ) : (
                    transaction.mpesaCode || '-'
                  )}
                </TableCell>
                <TableCell>
                  {editableRow === index ? (
                    <>
                      <IconButton onClick={() => handleSaveClick(index)}>
                        <SaveIcon />
                      </IconButton>
                      <IconButton onClick={() => setEditableRow(null)}>
                        <CancelIcon />
                      </IconButton>
                    </>
                  ) : (
                    <IconButton onClick={() => handleEditClick(index)}>
                      <EditIcon />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={handleApprovalDialogOpen}>
        Approve Edits
      </Button>
      <Dialog open={approvalDialogOpen} onClose={handleApprovalDialogClose}>
        <DialogTitle>Approve Pending Edits</DialogTitle>
        <DialogContent>
          {/* Display pending edits for approval */}
          {pendingEdits.length > 0 ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Period</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>MPESA Code</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pendingEdits.map((edit, index) => (
                  <TableRow key={index}>
                    <TableCell>{edit.period}</TableCell>
                    <TableCell>{edit.name}</TableCell>
                    <TableCell>{edit.mpesaCode}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Typography>No pending edits</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleApprovalDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleApproveEdits} color="primary">
            Approve
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Transactions;
