import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {
  Person,
  Record,
} from '../Gallery/Gallery'

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

interface Props {
  artwork: Record
}

export default function ({ artwork }: Props) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      key={artwork.id}
    >
      <CardMedia
        className={classes.media}
        image={artwork.primaryimageurl}
        title={artwork.title}
      />
      <CardContent
        className={classes.content}
      >
        {artwork.people && artwork.people.length > 0 &&
          <Typography
            variant="h5"
            component="h2"
          >
            {artwork.people[0].displayname}
          </Typography>
        }
        <Typography
          variant="subtitle2"
          component="p"
        >
          {artwork.title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
        >
          {artwork.medium}
        </Typography>
        <Typography
          variant="body2"
          component="p"
        >
          {artwork.period}
        </Typography>
      </CardContent>
    </Card>
  );
}



