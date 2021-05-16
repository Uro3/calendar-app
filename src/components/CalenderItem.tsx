import React from 'react';

type Props = {
  date: string;
};

const CalendarItem: React.FC<Props> = props => {
  return (
    <div>
      <p>{props.date}</p>
    </div>
  );
}

export default CalendarItem;
