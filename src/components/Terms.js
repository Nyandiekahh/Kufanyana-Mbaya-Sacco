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
          We are a member-owned financial cooperative committed to promoting financial inclusion, member participation, and social responsibility. These Terms and Conditions govern your membership of the Sacco and your use of our services. By becoming a member or using our services, you agree to be bound by these Terms.
        </Typography>
        <Typography variant="h6" gutterBottom>
          1. Membership
        </Typography>
        <Typography variant="h6" gutterBottom>
          1.1 Eligibility and Application
        </Typography>
        <Typography paragraph>
          Membership in the Sacco is open to any individual who meets the following criteria:
          <ul>
            <li>Age: You must be at least 18 years old to apply for membership.</li>
            <li>Residence: While residency in Kenya is not mandatory, you should be able to demonstrate a strong connection to the Kenyan community.</li>
            <li>Character: The Sacco promotes ethical conduct and financial responsibility. Applicants who exhibit a history of financial mismanagement or unethical behavior may be denied membership at the Board's discretion.</li>
          </ul>
        </Typography>
        <Typography variant="h6" gutterBottom>
          1.2 Application Process
        </Typography>
        <Typography paragraph>
          To apply for membership, you must complete the following steps:
          <ol>
            <li>Application Email: Send an email to <a href="mailto:kufanyanambayasacco@gmail.com">kufanyanambayasacco@gmail.com</a> expressing your interest in joining the Sacco. The email should include a brief introduction of yourself and your reasons for wanting to become a member.</li>
            <li>Joining Fee: Pay a one-time, non-refundable joining fee of Ksh 200. Payment instructions will be provided upon receipt of your application email.</li>
            <li>Initial Deposit: Make a minimum initial deposit of Ksh 1,000 into your savings account. Deposit instructions will be provided upon receipt of your application email.</li>
          </ol>
        </Typography>
        <Typography variant="h6" gutterBottom>
          1.3 Approval Process
        </Typography>
        <Typography paragraph>
          Upon receipt of your application email, joining fee, and initial deposit, the Sacco Board of Directors will review your application. You will be notified by email of the Board's decision within 5 business days.
        </Typography>
        <Typography variant="h6" gutterBottom>
          1.4 Membership Rights and Responsibilities
        </Typography>
        <Typography paragraph>
          As a member of the Sacco, you are entitled to the following:
          <ul>
            <li>Voting Rights: You have the right to vote on all matters brought before the membership, including the election of Board members and approval of loan applications from non-members.</li>
            <li>Access to Services: You have access to all Sacco services, including savings accounts and loans (subject to approval).</li>
            <li>Transparency: You have the right to receive clear and concise information about the Sacco's financial performance, governance structure, and operational policies.</li>
          </ul>
          Members also have certain responsibilities, including:
          <ul>
            <li>Upholding Sacco Values: Members are expected to conduct themselves in a manner that upholds the Sacco's core values of financial inclusion, member participation, and social responsibility.</li>
            <li>Meeting Financial Obligations: Members are obligated to make their monthly savings deposits on time and fulfill their loan repayment commitments.</li>
            <li>Abiding by Sacco Rules: Members must comply with all Sacco rules and regulations as outlined in these Terms and Conditions and any additional policies established by the Board of Directors.</li>
          </ul>
        </Typography>
        <Typography variant="h6" gutterBottom>
          1.5 Revocation of Membership
        </Typography>
        <Typography paragraph>
          Membership in the Sacco may be revoked for the following reasons:
          <ul>
            <li>Non-payment of Savings: Failure to make your monthly savings deposits for three consecutive months without a valid justification may result in revocation of membership.</li>
            <li>Breach of Rules: Engaging in activities that violate the Sacco's rules or undermine its core values may lead to membership revocation.</li>
            <li>Fraudulent Activity: Any member found to be involved in fraudulent activity related to the Sacco's operations will have their membership revoked.</li>
          </ul>
          The decision to revoke membership rests with the Board of Directors. Members facing potential revocation will be notified in writing and given an opportunity to respond to the allegations before a final decision is made.
        </Typography>
        {/* Add more sections as needed */}
      </Paper>
    </Container>
  );
}

export default Terms;
