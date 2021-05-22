import React from 'react';
import { DISPLAY_DAYS } from '../../constants';
import style from './Calendar.module.scss';
import CalendarElemntSlot from './CalendarElementSlot';
import CalendarHeader from './CalendarHeader';

const CalendarSlot: React.FC = props => {
  const headers = DISPLAY_DAYS.map(day =>
    <CalendarElemntSlot key={day}>
      <CalendarHeader value={day} />
    </CalendarElemntSlot>
  );

  return (
    <div className={`columns is-multiline is-gapless is-mobile ${style.container}`}>
      {headers}
      {props.children}
    </div>
  );
}

export default CalendarSlot;
