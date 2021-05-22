import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Schedule, ScheduleDialogState } from '../../types';
import { open } from '../../modules/scheduleDialog';
import style from './Schedule.module.scss';

type Props = {
  id: string;
};

const ScheduleComponent: React.FC<Props> = props => {
  const schedule: Schedule = useAppSelector<Schedule>(state => state.schedule[props.id]);
  const dispatch = useAppDispatch();

  const openDialog = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    
    const params: ScheduleDialogState = {
      activeDialog: 'SHOW',
      scheduleId: schedule.id
    };
    dispatch(open(params))
  };

  return (
    <div className="is-size-7 mt-1 mr-2">
      <button className={`button is-small is-info is-light is-rounded is-fullwidth ${style.box}`} onClick={openDialog}>
        <span className="has-text-left is-clipped px-1">
          {schedule.title}
        </span>
      </button>
    </div>
  );
}

export default ScheduleComponent;
