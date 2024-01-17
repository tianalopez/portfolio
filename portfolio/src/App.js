
import './styles/App.css';
import {Container, Box, Grid, Typography, Link} from '@mui/material';
import { NavLink } from "react-router-dom";

function App() {

  const handleDownload = () => {
    const resumeUrl = '/resources/resume.pdf'
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Tiana_Lopez_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleClick = () => {

  }

  return (
    <Container maxWidth='lg'>
      <Box className='content'>
        <Grid container spacing={2} sx={{alignItems:'top'}}>
          <Grid item xs={12} sx={{ml: 4, mt:4, pl:0}}>
            <Typography sx={{fontSize: {lg: '3.2rem', md: '3.0rem', sm: '2.5rem',xs: '2rem'}}} fontFamily='Kalnia' fontWeight='300'>
              TIANA LOPEZ
            </Typography>
            <Typography sx={{ ml: 1, fontSize: { lg: '1.6rem', md: '1.5rem', sm: '1.3rem', xs: '1rem' } }} fontFamily='Playfair Display' fontWeight='200'>
              Full-Stack Software Engineer
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ ml: 4, mt: 1, pl: 0, flexDirection:'column', display:'flex' }}>
            <Typography  sx={{ml:1.5}}>•••</Typography>
            <NavLink className='link' to={'/'} onClick={handleClick}>
              Home
            </NavLink>
            <NavLink className='link' to={'/portfolio'}>
              Portfolio
            </NavLink >
            <NavLink className='link' onClick={handleDownload}>
              Resume (Download)
            </NavLink>
            <NavLink className='link' to={'/contact'}>
              Contact
            </NavLink>
            <Typography sx={{ml:1.5}}>•••</Typography>
          </Grid>
        </Grid>
        <Grid
          className='flex-content' container spacing={2}>
          <Grid item xs={12}>
            <Typography fontFamily='Playfair Display' sx={{ textAlign: 'right' }}>
              I'm a full-stack software engineer with skills in Javascript (React), Python (Flask), HTML, and CSS. I'm passionate about learning and always looking to challenge myself. What excites me the most is using my skills to create innovative applications that make a positive impact. Let's connect and build something awesome together!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
