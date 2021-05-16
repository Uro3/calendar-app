import React from 'react';
import { CalendarState } from '../types';
import { useAppSelector } from '../hooks';
import CalenderItem from './CalenderItem';

const Calendar: React.FC = () => {
  const calendar: CalendarState = useAppSelector<CalendarState>(state => state.calendar);

  const calendarDays = [
    ...calendar.extraPreviousDays,
    ...calendar.days,
    ...calendar.extraNextDays
  ];
  console.log(calendarDays);
  
  const list = calendarDays.map(date => 
    <CalenderItem date={date}></CalenderItem>
  );

  return (
    <div className="columns">
      {list}
    </div>
  );
}

export default Calendar;
