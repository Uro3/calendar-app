import React from 'react';
import { CalendarState } from '../../types';
import { useAppSelector } from '../../hooks';
import { DISPLAY_DAYS } from '../../constants';
import style from './Calender.module.scss';
import CalenderElemntSlot from './CalenderElementSlot';
import CalenderHeader from './CalenderHeader';
import CalenderContent from './CalenderContent';

const Calendar: React.FC = () => {
  const calendar: CalendarState = useAppSelector<CalendarState>(state => state.calendar);

  const today: Date = new Date();
  const isYearMonthOfToday: boolean = calendar.year === today.getFullYear() && calendar.month === (today.getMonth() + 1);

  const headers = DISPLAY_DAYS.map(day =>
    <CalenderElemntSlot>
      <CalenderHeader value={day} />
    </CalenderElemntSlot>
  );
  
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
    <div className={`columns is-multiline is-gapless is-mobile ${style.container}`}>
      {headers}
      {contents}
    </div>
  );
}

export default Calendar;
