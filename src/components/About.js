// src/components/About.js
import React from 'react';
import { Typography, Box, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      {/* Introduction Section */}
      <Box
        sx={{
          padding: { xs: '50px 0', sm: '100px 0' },
          backgroundColor: theme.palette.primary.dark, // Darker shade for a rich background
          color: theme.palette.primary.contrastText,
          textAlign: 'center',
          borderRadius: 2,
          marginBottom: 4,
          boxShadow: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontFamily: 'Roboto, sans-serif' }}
          >
            About Kufanyana Mbaya Sacco Limited
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{ marginTop: 2, fontFamily: 'Open Sans, sans-serif' }}
          >
            A member-owned cooperative dedicated to promoting financial inclusion, member participation, and social responsibility.
          </Typography>
        </motion.div>
      </Box>

      {/* Membership Section */}
      <Box sx={{ padding: 4, marginBottom: 4, backgroundColor: '#f5f5f5' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontFamily: 'Roboto, sans-serif', color: '#1976d2' }}
          >
            Membership
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'white' }}>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontFamily: 'Roboto, sans-serif', color: '#1976d2' }}
                >
                  Eligibility
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  Open to individuals aged 18 and above with a strong connection to the Kenyan community.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'white' }}>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontFamily: 'Roboto, sans-serif', color: '#1976d2' }}
                >
                  Application
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  Apply via email, pay a joining fee, and make an initial deposit. Members have voting rights and responsibilities to uphold Sacco values.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Box>

      {/* Savings Section */}
      <Box sx={{ padding: 4, marginBottom: 4, backgroundColor: '#e8f5e9' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontFamily: 'Roboto, sans-serif', color: '#388e3c' }}
          >
            Savings
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'white' }}>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontFamily: 'Roboto, sans-serif', color: '#388e3c' }}
                >
                  Importance
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  Encouraged for financial security and achieving goals with a minimum monthly savings of Ksh 1,000. Late fees may apply.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'white' }}>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontFamily: 'Roboto, sans-serif', color: '#388e3c' }}
                >
                  Withdrawals
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  Allowed with a 30-day notice; early withdrawal fees may apply.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Box>

      {/* Loans Section */}
      <Box sx={{ padding: 4, marginBottom: 4, backgroundColor: '#fff3e0' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontFamily: 'Roboto, sans-serif', color: '#ff6f00' }}
          >
            Loans
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'white' }}>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontFamily: 'Roboto, sans-serif', color: '#ff6f00' }}
                >
                  Purpose
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  Assist with expenses like education, medical bills, or business ventures. Available to members in good standing.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'white' }}>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontFamily: 'Roboto, sans-serif', color: '#ff6f00' }}
                >
                  Application and Repayment
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  Complete a form, submit documents, and potentially attend an interview. Loans must be repaid as per the agreed terms.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Box>

      {/* Governance Section */}
      <Box sx={{ padding: 4, marginBottom: 4, backgroundColor: '#fce4ec' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontFamily: 'Roboto, sans-serif', color: '#d81b60' }}
          >
            Governance
          </Typography>
          <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'white' }}>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Operates under a democratic structure with a Board of Directors and Supervisory Committee elected by members. Members have the right to vote on key decisions and governance matters.
            </Typography>
          </Paper>
        </motion.div>
      </Box>

      {/* Contact Information Section */}
      <Box sx={{ padding: 4, backgroundColor: '#e3f2fd' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontFamily: 'Roboto, sans-serif', color: '#0288d1' }}
          >
            Contact Information
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            For inquiries or concerns, please reach out to us at:
            <br />
            <strong>Email:</strong> kufanyanambayasacco@gmail.com
            <br />
            <strong>Phone:</strong> +254796611599
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
