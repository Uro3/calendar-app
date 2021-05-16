import React from 'react';
import { CalendarState } from '../types';
import { useAppSelector } from '../hooks';
import CalenderItem from './CalenderItem';

const Calendar: React.FC = () => {
  const calendar: CalendarState = useAppSelector<CalendarState>(state => state.calendar);

  const dateNum = new Date(calendar.year, calendar.month, 0).getDate();

  const list = [...Array(dateNum)].map((_, index) => 
    <CalenderItem date={index + 1}></CalenderItem>
  );

  return (
    <div className="columns">
      {list}
    </div>
  );
}

export default Calendar;
