import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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

interface Person {
  prefix?: string// null,
  personid: number// 26704,
  displayname: string;// "Katsushika Sōji (Isai)"
}

interface Record {
  id: number;
  medium: string;
  people: Person[];
  period: string;
  primaryimageurl: string;
  title: string;
}

interface Props {
  records: Record[]
}

export default function (props: Props) {
  const classes = useStyles()

  return (
    <div>
    {
      props.records.map((record: Record) =>
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
    </div>
  )
}