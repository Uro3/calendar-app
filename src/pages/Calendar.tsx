import React from 'react';
import { CalendarState } from '../types';
import { useAppSelector } from '../hooks';
import CalendarSlot from '../components/Calendar/CalendarSlot';
import CalenderElemntSlot from '../components/Calendar/CalenderElementSlot';
import CalenderContent from '../components/Calendar/CalenderContent';

const Calendar: React.FC = () => {
  const calendar: CalendarState = useAppSelector<CalendarState>(state => state.calendar);

  const today: Date = new Date();
  const isYearMonthOfToday: boolean = calendar.year === today.getFullYear() && calendar.month === (today.getMonth() + 1);

  const contents = calendar.contents.map(content => {
    const isCurrentMonth: boolean = content.month === calendar.month;
    const isToday: boolean = isYearMonthOfToday && content.date === today.getDate();
    return (
      <CalenderElemntSlot>
        <CalenderContent content={content} isCurrentMonth={isCurrentMonth} isToday={isToday} />
      </CalenderElemntSlot>
    );
  });

  return (
    <CalendarSlot>
      {contents}
    </CalendarSlot>
  );
}

export default Calendar;
