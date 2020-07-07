import React, {
  useEffect,
  useState,
} from 'react';
import { Waypoint } from 'react-waypoint';
import GalleryGrid from '../GalleryGrid/GalleryGrid';
import GalleryCard from '../GalleryCard/GalleryCard';

import { styled } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const ProgressWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: '24px 0',
  width: '100%',
});

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
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const [records, setRecords] = useState([] as Record[]);

  useEffect(() => {
    async function readRecords (page: number) {
      if(loading) return;

      try {
        const url = `https://api.harvardartmuseums.org/object?classification=Prints&hasimage=1&sort=title&sortorder=desc&apikey=c28e4be0-4c0e-11ea-90d6-25d9a9fe80fc&size=10&page=${page}`;
        setLoading(true);
        const response = await fetch(url);

        if(!response.ok) throw new Error('Error reading from API');

        const body = await response.json()
        setHasMore(body.info.page < body.info.pages)
        setRecords([
          ...records,
          ...body.records,
        ])
        setLoading(false);
      }
      catch (err) {
        console.error(err)
      }
    }

    readRecords(page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  function readNextPage () {
    setPage(page + 1)
  }

  if(records.length === 0) {
    return (
      <ProgressWrapper>
        <CircularProgress
          size="40px"
        />
      </ProgressWrapper>
    );
  }

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

     {hasMore &&
      <Waypoint
        onEnter={readNextPage}
        topOffset="-100px"
      >
        <ProgressWrapper>
          <CircularProgress
            size="40px"
          />
        </ProgressWrapper>
      </Waypoint>
    }
    </>
  )
}