import logo from './logo.svg';
import './App.css';
import {AppBar, Container, IconButton, Toolbar, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
     <AppBar position="fixed">
       <Container fixed>
          <Toolbar>
            <IconButton edge="start"  
              color="inherit" aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              Three Screen Solutions
            </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined">
                Log in
              </Button>
            </Box>
            <Button color="secondary" variant="contained">
                Sign Up
              </Button>
          </Toolbar>
       </Container>
     </AppBar>
    </div>
  );
}

export default App;
