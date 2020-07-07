import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {
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
    marginTop: '32px',
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
  const person = artwork.people?.[0]

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
        <Typography
          variant="h5"
          component="h2"
        >
          {artwork.title}
        </Typography>
        {person &&
          <Typography
            variant="subtitle2"
            component="p"
          >
            {person.displayname || person.name}
          </Typography>
        }
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
