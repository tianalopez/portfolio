import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, Link } from '@mui/material';
import "../styles/portfolio.css";
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import "../styles/contact.css";


const Contact = () => {
  const email = 'lopez.y.tiana@gmail.com';

  return (
    <Container maxWidth='lg'>
      <Box>
        <Grid container spacing={2} sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          <span className='me'>
            <img className='img-me' alt='Tiana holding baby goat' src='/images/me.png'></img>
          </span>
        </Grid>
        <Grid className='portfolio' container spacing={2} sx={{ width: 'fit-content', display: 'flex', flexDirection: 'column' }}>
          <Link href={'https://www.linkedin.com/in/tiana-lopez-728863180/'} className='contact-link'>
              LinkedIn
              <CallMadeOutlinedIcon sx={{ color: '#232F2A', ml: 0.5 }}/>
          </Link>
          <Link href={'https://github.com/tianalopez'} className='contact-link'>
              Github
              <CallMadeOutlinedIcon sx={{ color: '#232F2A', ml: 0.5 }}/>
          </Link>
          <Link href={'https://tianalopez.hashnode.dev/'} className='contact-link'>
              Blog
              <CallMadeOutlinedIcon sx={{ color: '#232F2A', ml: 0.5 }}/>
          </Link>
          <Typography sx={{ ml: 1.5 }}>•</Typography>
          <Link className='contact-link' href={`mailto:${email}`}>
            {email}
            <CallMadeOutlinedIcon sx={{ color: '#232F2A', ml: 0.5 }} />
          </Link>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
