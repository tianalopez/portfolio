import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, Link } from '@mui/material';
import "../styles/portfolio.css";
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import "../styles/contact.css"

const Contact = () => {

  return (
    <Container maxWidth='lg'>
      <Box>
        <Grid className='portfolio' container spacing={2} sx={{ width: 'fit-content', display: 'flex', flexDirection: 'column' }}>
          <Link href={'https://www.linkedin.com/in/tiana-lopez-728863180/'} className='contact-link'>

              LinkedIn
              <CallMadeOutlinedIcon sx={{ color: '#232F2A', ml: 0.5 }}/>

          </Link>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
