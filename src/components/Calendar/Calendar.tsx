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

  const headers = DISPLAY_DAYS.map(day =>
    <CalenderElemntSlot>
      <CalenderHeader value={day} />
    </CalenderElemntSlot>
  );
  
  const contents = calendar.contents.map(content =>
    <CalenderElemntSlot>
      <CalenderContent content={content} isCurrentMonth={content.month === calendar.month} />
    </CalenderElemntSlot>
  );

  return (
    <div className={`columns is-multiline is-gapless is-mobile ${style.container}`}>
      {headers}
      {contents}
    </div>
  );
}

export default Calendar;
