import React, {
  useEffect,
  useState,
} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Gallery from './Gallery/Gallery';

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function readRecords () {
      try {
        const url = 'https://api.harvardartmuseums.org/object?classification=Prints&hasimage=1&sort=title&sortorder=desc&apikey=c28e4be0-4c0e-11ea-90d6-25d9a9fe80fc&size=10&page=2';
        const response = await fetch(url);

        if(!response.ok) throw new Error('Error reading records from API');

        const body = await response.json()
        setRecords(body.records)
      }
      catch (err) {
        console.error(err)
      }
    }

    readRecords()
  }, [])

  console.log('records', records)

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
      <Gallery
        records={records}
      />
    </div>
  );
}

export default App;
