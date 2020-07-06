import React from 'react';
import Card from '@material-ui/core/Card'

interface Record {
  accessionyear: number;
  id: number;
  medium: string;
  primaryimageurl: string;
  title: string;
}

interface Props {
  records: Record[]
}

export default function (props: Props) {
  return (
    <div>
    {
      props.records.map((record: Record) =>
        <Card
          key={record.id}
        >
        {record.title}
        </Card>
      )
    }
    </div>
  )
}