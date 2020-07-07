import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Gallery from './Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Container
          maxWidth="lg"
        >
          <Toolbar>
            <Typography
              component="h1"
              variant="h4"
            >
              Harvard Art
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <Container
        maxWidth="lg"
      >
        <Gallery />
      </Container>
    </div>
  );
}

export default App;
