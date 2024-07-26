import React, { useState, useEffect } from 'react';
import { Typography, Box, Container, Grid, Paper, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

const Home = () => {
  const [openLoanDialog, setOpenLoanDialog] = useState(false);
  const [openJoinDialog, setOpenJoinDialog] = useState(false);
  const [loanForm, setLoanForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    loanAmount: '',
    loanPurpose: '',
    guarantorId: '',
  });
  const [joinForm, setJoinForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    occupation: '',
  });
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/members')
      .then(response => response.json())
      .then(data => setMembers(data))
      .catch(error => console.error('Error fetching members:', error));
  }, []);

  const handleLoanClickOpen = () => setOpenLoanDialog(true);
  const handleLoanClose = () => setOpenLoanDialog(false);
  const handleJoinClickOpen = () => setOpenJoinDialog(true);
  const handleJoinClose = () => setOpenJoinDialog(false);

  const handleLoanChange = (e) => setLoanForm({ ...loanForm, [e.target.name]: e.target.value });
  const handleJoinChange = (e) => setJoinForm({ ...joinForm, [e.target.name]: e.target.value });

  const handleLoanSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5001/apply-loan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loanForm),
      });
      if (response.ok) {
        alert('Loan application submitted successfully!');
        handleLoanClose();
      } else {
        alert('Failed to submit loan application.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleJoinSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5001/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(joinForm),
      });
      if (response.ok) {
        alert('Join application submitted successfully!');
        handleJoinClose();
      } else {
        alert('Failed to submit join application.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          padding: { xs: '80px 0', sm: '120px 0' },
          color: 'white',
          textAlign: 'center',
          backgroundColor: '#0288d1',
          backgroundImage: 'url(/path/to/hero-image.jpg)', // Add a background image if you have one
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Empowering Dreams, Transforming Lives
        </Typography>
        <Typography variant="h5" component="p" sx={{ marginBottom: 4 }}>
          Kufanyana Mbaya Sacco Limited is dedicated to financial inclusion, member participation, and social responsibility.
        </Typography>
        <Button variant="contained" color="secondary" endIcon={<ArrowForwardIcon />}>
          Learn More
        </Button>
      </Box>

      {/* Overview Section */}
      <Box sx={{ padding: 8, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Discover the Difference
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto' }}>
          Kufanyana Mbaya Sacco is committed to providing financial opportunities through integrity, transparency, and inclusivity. Our vision is to empower every member to achieve their full potential with tailored financial services and dedicated support.
        </Typography>
      </Box>

      {/* Features Section */}
      <Box sx={{ padding: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Our Key Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={6} sx={{ padding: 4, borderRadius: 3, boxShadow: 3 }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Member Benefits
              </Typography>
              <Typography variant="body1">
                Enjoy access to savings accounts, loans, and profit-sharing initiatives. Your contributions help drive our success, benefiting every member.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={6} sx={{ padding: 4, borderRadius: 3, boxShadow: 3 }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Loan Services
              </Typography>
              <Typography variant="body1">
                We offer competitive loan rates and financial assistance to both members and non-members, with a focus on supporting our community’s growth.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={6} sx={{ padding: 4, borderRadius: 3, boxShadow: 3 }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                Contact Us
              </Typography>
              <Typography variant="body1">
                For more information or to start your journey with us, reach out to us at <strong>kufanyanambayasacco@gmail.com</strong> or call <strong>+254796611599</strong>.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          padding: { xs: '80px 0', sm: '120px 0' },
          textAlign: 'center',
          backgroundColor: '#0288d1',
          color: 'white',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Ready to Transform Your Future?
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Join Kufanyana Mbaya Sacco today and be a part of a community dedicated to your financial growth and success. Start your application or learn more about our services now!
        </Typography>
        <Button variant="contained" color="secondary" endIcon={<ArrowForwardIcon />} onClick={handleJoinClickOpen}>
          Join Us Now
        </Button>
        <Button variant="contained" color="secondary" endIcon={<ArrowForwardIcon />} onClick={handleLoanClickOpen}>
          Apply for Loan Now
        </Button>
      </Box>

      {/* Loan Application Dialog */}
      <Dialog open={openLoanDialog} onClose={handleLoanClose}>
        <DialogTitle>Loan Application Form</DialogTitle>
        <DialogContent>
          <TextField name="name" autoFocus margin="dense" label="Name" type="text" fullWidth variant="outlined" onChange={handleLoanChange} />
          <TextField name="email" margin="dense" label="Email" type="email" fullWidth variant="outlined" onChange={handleLoanChange} />
          <TextField name="phoneNumber" margin="dense" label="Phone Number" type="text" fullWidth variant="outlined" onChange={handleLoanChange} />
          <TextField name="loanAmount" margin="dense" label="Loan Amount" type="number" fullWidth variant="outlined" onChange={handleLoanChange} />
          <TextField name="loanPurpose" margin="dense" label="Loan Purpose" type="text" fullWidth variant="outlined" multiline rows={4} onChange={handleLoanChange} />
          <FormControl fullWidth margin="dense">
            <InputLabel id="guarantor-label">Guarantor</InputLabel>
            <Select
              labelId="guarantor-label"
              id="guarantor"
              name="guarantorId"
              value={loanForm.guarantorId}
              label="Guarantor"
              onChange={handleLoanChange}
            >
              {members.map(member => (
                <MenuItem key={member.id} value={member.id}>
                  {member.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoanClose}>Cancel</Button>
          <Button onClick={handleLoanSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>

      {/* Join Us Dialog */}
      <Dialog open={openJoinDialog} onClose={handleJoinClose}>
        <DialogTitle>Join Us Form</DialogTitle>
        <DialogContent>
          <TextField name="name" autoFocus margin="dense" label="Name" type="text" fullWidth variant="outlined" onChange={handleJoinChange} />
          <TextField name="email" margin="dense" label="Email" type="email" fullWidth variant="outlined" onChange={handleJoinChange} />
          <TextField name="phoneNumber" margin="dense" label="Phone Number" type="text" fullWidth variant="outlined" onChange={handleJoinChange} />
          <TextField name="address" margin="dense" label="Address" type="text" fullWidth variant="outlined" onChange={handleJoinChange} />
          <TextField name="occupation" margin="dense" label="Occupation" type="text" fullWidth variant="outlined" onChange={handleJoinChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleJoinClose}>Cancel</Button>
          <Button onClick={handleJoinSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Home;
