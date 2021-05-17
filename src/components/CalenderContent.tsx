import React from 'react';
import { CalendarContent as CalendarContentType } from '../types';

type Props = {
  content: CalendarContentType;
  isCurrentMonth: boolean;
};

const CalendarContent: React.FC<Props> = props => {
  const dateTextColorClass = props.isCurrentMonth ? 'has-text-black' : 'has-text-grey';
  const { date, month } = props.content;
  const displayDate = date === 1 ? `${month}月 ${date}日` : date ;

  return (
    <>
      <span className={dateTextColorClass}>
        {displayDate}
      </span>
    </>
  );
}

export default CalendarContent;
