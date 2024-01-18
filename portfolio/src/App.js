
import './styles/App.css';
import {Container, Box, Grid, Typography,} from '@mui/material';
import { NavLink, Outlet } from "react-router-dom";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

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
        <Grid container spacing={2} sx={{ alignItems: 'top' }}>
          <Grid className='content-grid' item xs={12} sx={{ ml: 4, mt: 4, pl: 0, width: 'fit-content' }}>
            <Typography sx={{fontSize: {lg: '3.2rem', md: '3.0rem', sm: '2.5rem',xs: '2rem'}}} fontFamily='Kalnia' fontWeight='300'>
              TIANA LOPEZ
            </Typography>
            <Typography sx={{ ml: 1, fontSize: { lg: '1.6rem', md: '1.5rem', sm: '1.3rem', xs: '1rem' } }} fontFamily='Playfair Display' fontWeight='200'>
              Full-Stack Software Engineer
            </Typography>
          </Grid>
          <Grid className='content-grid' item xs={12} sx={{ ml: 4, mt: 1, pl: 0, width:'fit-content', flexDirection:'column', display:'flex' }}>
            <Typography  sx={{ml:1.5}}>•••</Typography>
            <NavLink className='link' to={'/'} onClick={handleClick}>
              Home
            </NavLink>
            <NavLink className='link' to={'/portfolio'}>
              Portfolio
            </NavLink >
            <NavLink className='link' onClick={handleDownload}>
              Resume
              <FileDownloadOutlinedIcon sx={{ color: '#232F2A', ml: 0.5 }} />
            </NavLink>
            <NavLink className='link' to={'/contact'}>
              Contact
            </NavLink>
            <Typography sx={{ml:1.5}}>•••</Typography>
          </Grid>
        </Grid>
        <Outlet />
      {/* <Box className='color-mode'>
        <Grid>
        test
        </Grid>
      </Box> */}
      </Box>
    </Container>
  );
}

export default App;
