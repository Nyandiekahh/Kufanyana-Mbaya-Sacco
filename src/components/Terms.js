// src/components/Terms.js
import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const Terms = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ marginTop: 8 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Kufanyana Mbaya Sacco Limited
        </Typography>
        <Typography variant="h5" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography paragraph>
          Welcome to Kufanyana Mbaya Sacco Limited (the "Sacco")!
          We are a member-owned financial cooperative committed to promoting financial inclusion, member participation, and social responsibility. These Terms and Conditions govern your membership of Sacco and your use of our services. By becoming a member or using our services, you agree to be bound by these Terms.
        </Typography>
        <Typography variant="h6" gutterBottom>
          1. Membership
        </Typography>
        <Typography variant="h6" gutterBottom>
          1.1 Eligibility and Application
        </Typography>
        <Typography paragraph>
          Membership in the Sacco is open to any individual who meets the following criteria:
          • Age: You must be at least 18 years old to apply for membership.
          • Residence: While residency in Kenya is not mandatory, you should be able to demonstrate a strong connection to the Kenyan community.
          • Character: The Sacco promotes ethical conduct and financial responsibility. Applicants who exhibit a history of financial mismanagement or unethical behavior may be denied membership at the Board's discretion.
        </Typography>
        <Typography variant="h6" gutterBottom>
          1.2 Application Process
        </Typography>
        <Typography paragraph>
          To apply for membership, you must complete the following steps:
          1. Application Email: Send an email to kufanyanambayasacco@gmail.com expressing your interest in joining the Sacco. The email should include a brief introduction of yourself and your reasons for wanting to become a member.
          2. Joining Fee: Pay a one-time, non-refundable joining fee of Ksh 200. Payment instructions will be provided upon receipt of your application email.
          3. Initial Deposit: Make a minimum initial deposit of Ksh 1,000 into your savings account. Deposit instructions will be provided upon receipt of your application email.
        </Typography>
        {/* Add more sections as needed */}
      </Paper>
    </Container>
  );
}

export default Terms;
