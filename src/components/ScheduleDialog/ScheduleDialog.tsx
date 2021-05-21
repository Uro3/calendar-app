import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { ScheduleDialogState } from '../../types';
import { close } from '../../modules/scheduleDialog';
import ScheduleDialogAdd from './ScheduleDialogAdd';

const ScheduleDialog: React.FC = () => {
  const scheduleDialog: ScheduleDialogState = useAppSelector<ScheduleDialogState>(state => state.scheduleDialog);
  const dispatch = useAppDispatch();

  const closeDialog = () => {
    dispatch(close());
  };

  let isActiveClass = '';
  let content = null;
  switch (scheduleDialog.activeDialog) {
    case 'ADD':
      isActiveClass = 'is-active';
      content = <ScheduleDialogAdd
        close={closeDialog}
        year={scheduleDialog.year}
        month={scheduleDialog.month}
        date={scheduleDialog.date}
      />;
      break;

    case 'UPDATE':
      break;

    case 'REMOVE':
      break;

    default:
      break;
  }

  return (
    <div className={`modal ${isActiveClass}`}>
      <div className="modal-background"></div>
      {content}
    </div>
  );
}

export default ScheduleDialog;
