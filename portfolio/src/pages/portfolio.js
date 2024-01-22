import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, Link, Popover } from '@mui/material';
import "../styles/portfolio.css"

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  //fetch data from db.json
  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then((r) => r.json())
      .then(setProjects)
      .catch((err) => alert(err));
  }, []);



  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const visibleProjects = projects.map((project) => (
      <Grid key={project.id} className='proj-grid' item xs={12} sx={{width:'fit-content', textAlign:'right'}}>
        <Link
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          target='_blank' href={project.url} sx={{width: 'auto'}}className='proj-link'>
          <Typography
          fontFamily='Playfair Display'
          fontWeight='200'
            sx={{
              width:'auto',
              fontSize: { lg: '3.0rem', md: '2.8rem', sm: '2.5rem', xs: '2rem' },
              textAlign: 'right',
            }}>
            {project.title}
          </Typography>
        </Link>
        <Typography
          className='tech'
          sx={{
            textAlign:'right',
            fontSize: { lg: '1.0rem', md: '1.0rem', sm: '0.8rem', xs: '0.8rem' }
          }}
          >
          {project.tech}
        </Typography>
      {/* <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover> */}
      </Grid>
  ));

  return (
    <Container  maxWidth='lg'>
      <Box
      className='port-container'
      >
        <Grid className='portfolio' container spacing={2} sx={{ width:'fit-content',display: 'flex', flexDirection:'column'}}>
          {visibleProjects}
        </Grid>
      </Box>

    </Container>
  );
};

export default Portfolio;
