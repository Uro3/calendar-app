import React from 'react';
import style from './Calendar.module.scss';

const CalendarElemntSlot: React.FC = props => {
  return (
    <div className={`column ${style.element}`}>
      {props.children}
    </div>
  );
}

export default CalendarElemntSlot;
