import React from 'react';
import style from './Calender.module.scss';

const CalendarElemntSlot: React.FC = props => {
  return (
    <div className={`column ${style.element}`}>
      {props.children}
    </div>
  );
}

export default CalendarElemntSlot;
