import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { ScheduleDialogState } from '../../types';
import { close } from '../../modules/scheduleDialog';
import ScheduleDialogAdd from './ScheduleDialogAdd';
import ScheduleDialogShow from './ScheduleDialogShow';
import ScheduleDialogEdit from './ScheduleDialogEdit';

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
        year={scheduleDialog.year || 0}
        month={scheduleDialog.month || 0}
        date={scheduleDialog.date || 0}
      />;
      break;

      case 'SHOW':
        if (scheduleDialog.scheduleId) {
          isActiveClass = 'is-active';
          content = <ScheduleDialogShow
            close={closeDialog}
            scheduleId={scheduleDialog.scheduleId}
            year={scheduleDialog.year || 0}
            month={scheduleDialog.month || 0}
            date={scheduleDialog.date || 0}
          />;
        }
        break;

    case 'EDIT':
      if (scheduleDialog.scheduleId) {
        isActiveClass = 'is-active';
        content = <ScheduleDialogEdit
          close={closeDialog}
          scheduleId={scheduleDialog.scheduleId}
          year={scheduleDialog.year || 0}
          month={scheduleDialog.month || 0}
          date={scheduleDialog.date || 0}
        />;
      }
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
