import React from 'react';
import { CalendarState } from '../types';
import { useAppSelector } from '../hooks';
import { DISPLAY_DAYS } from '../constants';
import CalenderElemntSlot from './CalenderElementSlot';
import CalenderHeader from './CalenderHeader';
import CalenderContent from './CalenderContent';

const Calendar: React.FC = () => {
  const calendar: CalendarState = useAppSelector<CalendarState>(state => state.calendar);

  const headers = DISPLAY_DAYS.map(day =>
    <CalenderElemntSlot>
      <CalenderHeader value={day} />
    </CalenderElemntSlot>
  );

  const calendarDays = [
    ...calendar.extraPreviousDays,
    ...calendar.days,
    ...calendar.extraNextDays
  ];
  console.log(calendarDays);
  
  const contents = calendarDays.map(date =>
    <CalenderElemntSlot>
      <CalenderContent date={date} />
    </CalenderElemntSlot>
  );

  return (
    <div className="columns is-multiline is-gapless is-mobile">
      {headers}
      {contents}
    </div>
  );
}

export default Calendar;
