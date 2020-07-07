import React, {
  useEffect,
  useState,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GalleryGrid from '../GalleryGrid/GalleryGrid'
import GalleryCard from '../GalleryCard/GalleryCard'

const useStyles = makeStyles({
  root: {
    marginBottom: '16px',
    maxWidth: '410px',
  },
  media: {
    height: '200px',
  },
  content: {
    '& * + *': {
      marginTop: '8px'
    },
  }
})

export interface Person {
  prefix?: string// null,
  personid: number// 26704,
  displayname: string;// "Katsushika Sōji (Isai)"
}

export interface Record {
  id: number;
  medium: string;
  people: Person[];
  period: string;
  primaryimageurl: string;
  title: string;
}

export default function () {
  const classes = useStyles()

  const [records, setRecords] = useState([] as Record[]);

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

  return (
    <GalleryGrid>
    {
      records.map((record: Record) =>
          <Card
            className={classes.root}
            key={record.id}
          >
            <CardMedia
              className={classes.media}
              image={record.primaryimageurl}
              title={record.title}
            />
            <CardContent
              className={classes.content}
            >
              {record.people && record.people.length > 0 &&
                <Typography
                  variant="h5"
                  component="h2"
                >
                  {record.people[0].displayname}
                </Typography>
              }
              <Typography
                variant="subtitle2"
                component="p"
              >
                {record.title}
              </Typography>
              <Typography
                variant="body2"
                component="p"
              >
                {record.medium}
              </Typography>
              <Typography
                variant="body2"
                component="p"
              >
                {record.period}
              </Typography>
            </CardContent>
          </Card>
      )
    }
    </GalleryGrid>
  )
}