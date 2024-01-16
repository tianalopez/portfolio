
import './styles/App.css';
import {Container, Box, Grid, Typography} from '@mui/material'

function App() {
  return (
    <Container maxWidth='lg'>
      <Box className='content'>
        <Grid container spacing={2}>
          <Grid item xs={12} className='header'>
            <Typography>
              Testing
            </Typography>

          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
