import React from 'react';
import { CalendarState } from '../types';
import { useAppSelector } from '../hooks';
import CalenderElemntSlot from './CalenderElementSlot';
import CalenderContent from './CalenderContent';

const Calendar: React.FC = () => {
  const calendar: CalendarState = useAppSelector<CalendarState>(state => state.calendar);

  const calendarDays = [
    ...calendar.extraPreviousDays,
    ...calendar.days,
    ...calendar.extraNextDays
  ];
  console.log(calendarDays);
  
  const list = calendarDays.map(date =>
    <CalenderElemntSlot>
      <CalenderContent date={date}/>
    </CalenderElemntSlot>
  );

  return (
    <div className="columns is-multiline is-gapless is-mobile">
      {list}
    </div>
  );
}

export default Calendar;
