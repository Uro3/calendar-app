import React from 'react';
import style from './CalenderElementSlot.module.css';

const CalendarElemntSlot: React.FC = props => {
  return (
    <div className={`${style.element} column`}>
      {props.children}
    </div>
  );
}

export default CalendarElemntSlot;