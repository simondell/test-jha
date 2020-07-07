import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Gallery from './Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography
            component="h1"
            variant="h4"
          >
            Harvard Art
          </Typography>
        </Toolbar>
      </AppBar>
      <Gallery />
    </div>
  );
}

export default App;
