import React, {
  useEffect,
  useState,
} from 'react';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { styled } from '@material-ui/core/styles';
import { Waypoint } from 'react-waypoint';
import GalleryGrid from '../GalleryGrid/GalleryGrid';
import GalleryCard from '../GalleryCard/GalleryCard';

const ProgressWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: '24px 0',
})

export interface Person {
  displayname?: string;
  name: string;
  prefix?: string;
  personid: number;
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
    <>
    <GalleryGrid>
    {
      records.map((record: Record) =>
        <GalleryCard
          key={record.id}
          artwork={record}
        />
      )
    }
    </GalleryGrid>
    <Waypoint
      onEnter={() => { console.log('enter!'); }}
      topOffset="-100px"
    >
      <ProgressWrapper>
        <CircularProgress
          size="40px"
        />
      </ProgressWrapper>
    </Waypoint>
    </>
  )
}