// src/components/Membership.js
import React from 'react';
import { Container, Typography, Paper, Box, Divider } from '@mui/material';

const Membership = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Membership Information
      </Typography>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Overview
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Kufanyana Mbaya Sacco! Our membership program is designed to provide you with a range of benefits and opportunities to grow financially. We offer flexible savings and loan options, a robust support system, and an inclusive community where your financial goals can be achieved.
        </Typography>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5" gutterBottom>
          Membership Benefits
        </Typography>
        <Typography variant="body1" paragraph>
          As a member, you will enjoy the following benefits:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li">Access to low-interest loans with flexible repayment options.</Typography>
          <Typography component="li">Competitive savings rates to help you grow your savings faster.</Typography>
          <Typography component="li">Exclusive access to financial education workshops and seminars.</Typography>
          <Typography component="li">Personalized financial advice from our experienced advisors.</Typography>
          <Typography component="li">Participation in annual general meetings and decision-making processes.</Typography>
        </Box>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5" gutterBottom>
          How to Become a Member
        </Typography>
        <Typography variant="body1" paragraph>
          Becoming a member of Kufanyana Mbaya Sacco is easy! Simply follow these steps:
        </Typography>
        <Box component="ol" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li">Complete our online membership application form.</Typography>
          <Typography component="li">Submit the required identification documents and proof of address.</Typography>
          <Typography component="li">Pay the one-time membership fee.</Typography>
          <Typography component="li">Attend an orientation session to understand our services and benefits.</Typography>
        </Box>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5" gutterBottom>
          Membership Fees
        </Typography>
        <Typography variant="body1" paragraph>
          Our membership fee is a one-time payment of KSh 1,000. This fee helps cover the administrative costs of setting up your account and provides you with access to all our services.
        </Typography>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions or need assistance with the membership process, please feel free to contact us at <strong>support@kufanyanambayasacco.com</strong> or call us at <strong>+254 701 234 567</strong>.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Membership;
