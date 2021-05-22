import React from 'react';
import { Schedule } from '../../types';
import { useAppSelector } from '../../hooks';
import style from './Schedule.module.scss';

type Props = {
  id: string;
};

const ScheduleComponent: React.FC<Props> = props => {
  const schedule: Schedule = useAppSelector<Schedule>(state => state.schedule[props.id]);
  return (
    <div className="is-size-7 mt-1 mr-2">
      <button className={`button is-small is-info is-light is-rounded is-fullwidth ${style.box}`}>
        <span className="has-text-left is-clipped px-1">
          {schedule.title}
        </span>
      </button>
    </div>
  );
}

export default ScheduleComponent;
