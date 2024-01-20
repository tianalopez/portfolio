import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, Link, Popover } from '@mui/material';
import "../styles/portfolio.css"

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [pop, setPop] = useState(false);
  const [anchorPosition, setAnchorPosition] = useState({ top: 0, left: 0 });

  //fetch data from db.json
  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then((r) => r.json())
      .then(setProjects)
      .catch((err) => alert(err));
  }, []);

  const handlePopoverOpen = (event) => {
    const { top, left, height } = event.currentTarget.getBoundingClientRect();
    setAnchorPosition({ top: top + height, left });
    setPop(true);
  };

  const handlePopoverClose = () => {
    setPop(false);
  };

  const visibleProjects = projects.map((project) => (
      <Grid key={project.id} className='proj-grid' item xs={12} sx={{width:'fit-content', textAlign:'right'}}>
        <Link
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
      <Popover
        open={pop}
        anchorPosition={anchorPosition}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        Test
      </Popover>
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
