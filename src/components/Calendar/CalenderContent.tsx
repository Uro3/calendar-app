import React from 'react';
import { CalendarContent as CalendarContentType } from '../../types';
import style from './Calender.module.scss';

type Props = {
  content: CalendarContentType;
  isCurrentMonth: boolean;
  isToday: boolean;
};

const CalendarContent: React.FC<Props> = props => {
  let dateTextColorClass = 'has-text-grey';
  if (props.isCurrentMonth) {
    dateTextColorClass = props.isToday ? 'has-text-white' : 'has-text-black';
  }
  const dateTextBackgroudColorClass = props.isToday ? 'is-info' : 'is-white';

  const { date, month } = props.content;
  const displayDate = date === 1 ? `${month}月 ${date}日` : date ;

  return (
    <>
      <div className="has-text-centered is-size-7">
        <button className={`button is-small is-rounded ${dateTextBackgroudColorClass}`}>
          <span className={dateTextColorClass}>
            {displayDate}
          </span>
        </button>
      </div>
      <div className={style.content}></div>
    </>
  );
}

export default CalendarContent;
