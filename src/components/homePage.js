import React from 'react';
import { Container, Grid, Typography, } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth='lg'>
      <Grid
        className='flex-content' container spacing={2}>
        <Grid item xs={12}>
          <Typography fontFamily='Playfair Display' sx={{ textAlign: 'right' }}>
            I'm a full-stack software engineer with skills in Javascript (React), Python (Flask), SQL, HTML, and CSS. I'm passionate about learning and always looking to challenge myself. What excites me the most is using my skills to create innovative applications that make a positive impact. Let's connect and build something awesome together!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
