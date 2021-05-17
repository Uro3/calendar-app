import React from 'react';

type Props = {
  date: number;
};

const CalendarContent: React.FC<Props> = props => {
  return (
    <>
      {props.date}
    </>
  );
}

export default CalendarContent;
