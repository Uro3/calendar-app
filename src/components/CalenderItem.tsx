import React from 'react';

type Props = {
  date: number;
};

const CalendarItem: React.FC<Props> = props => {
  return (
    <div className="column">
      <p>{props.date}</p>
    </div>
  );
}

export default CalendarItem;
