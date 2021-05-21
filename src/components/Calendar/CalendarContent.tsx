import React from 'react';
import { CalendarContent as CalendarContentType, ScheduleDialogState } from '../../types';
import { useAppDispatch } from '../../hooks';
import { open } from '../../modules/scheduleDialog';
import style from './Calendar.module.scss';

type Props = {
  content: CalendarContentType;
  isCurrentMonth: boolean;
  isToday: boolean;
};

const CalendarContent: React.FC<Props> = props => {
  const dispatch = useAppDispatch();

  let dateTextColorClass = 'has-text-grey';
  if (props.isCurrentMonth) {
    dateTextColorClass = props.isToday ? 'has-text-white' : 'has-text-black';
  }
  const dateTextBackgroudColorClass = props.isToday ? 'is-info' : 'is-white';

  const { date, month } = props.content;
  const displayDate = date === 1 ? `${month}月 ${date}日` : date ;

  const openDialog = () => {    
    const params: ScheduleDialogState = {
      activeDialog: 'ADD',
      month,
      date
    };
    dispatch(open(params))
  };

  return (
    <div onClick={openDialog}>
      <div className="has-text-centered is-size-7 py-1">
        <button className={`button is-small is-rounded ${dateTextBackgroudColorClass} ${style.date_text_field}`}>
          <span className={dateTextColorClass}>
            {displayDate}
          </span>
        </button>
      </div>
      <div className={style.content}></div>
    </div>
  );
}

export default CalendarContent;
