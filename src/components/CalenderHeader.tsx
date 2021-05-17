import React from 'react';
import style from './Calender.module.scss';

type Props = {
  value: string;
};

const CalendarHeader: React.FC<Props> = props => {
  return (
    <div className={style.caption}>
      <span className='has-text-grey'>
        {props.value}
      </span>
    </div>
  );
}

export default CalendarHeader;
