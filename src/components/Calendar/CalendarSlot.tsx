import React from 'react';
import { DISPLAY_DAYS } from '../../constants';
import style from './Calender.module.scss';
import CalenderElemntSlot from './CalenderElementSlot';
import CalenderHeader from './CalenderHeader';

const CalendarSlot: React.FC = props => {
  const headers = DISPLAY_DAYS.map(day =>
    <CalenderElemntSlot>
      <CalenderHeader value={day} />
    </CalenderElemntSlot>
  );

  return (
    <div className={`columns is-multiline is-gapless is-mobile ${style.container}`}>
      {headers}
      {props.children}
    </div>
  );
}

export default CalendarSlot;
