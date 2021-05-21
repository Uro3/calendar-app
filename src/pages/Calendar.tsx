import React from 'react';
import { CalendarState } from '../types';
import { useAppSelector } from '../hooks';
import CalendarSlot from '../components/Calendar/CalendarSlot';
import CalendarElemntSlot from '../components/Calendar/CalendarElementSlot';
import CalendarContent from '../components/Calendar/CalendarContent';
import ScheduleDialog from '../components/ScheduleDialog/ScheduleDialog';

const Calendar: React.FC = () => {
  const calendar: CalendarState = useAppSelector<CalendarState>(state => state.calendar);

  const today: Date = new Date();
  const isYearMonthOfToday: boolean = calendar.year === today.getFullYear() && calendar.month === (today.getMonth() + 1);

  const contents = calendar.contents.map(content => {
    const isCurrentMonth: boolean = content.month === calendar.month;
    const isToday: boolean = isYearMonthOfToday && content.date === today.getDate();
    return (
      <CalendarElemntSlot>
        <CalendarContent content={content} isCurrentMonth={isCurrentMonth} isToday={isToday} />
      </CalendarElemntSlot>
    );
  });

  return (
    <>
      <CalendarSlot>
        {contents}
      </CalendarSlot>
      <ScheduleDialog />
    </>
  );
}

export default Calendar;
