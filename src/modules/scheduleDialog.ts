import { Action } from 'redux';
import { ScheduleDialogState } from '../types';

// Types
export const actionTypes = {
  OPEN: 'scheduleDialog/OPEN',
  CLOSE: 'scheduleDialog/CLOSE'
} as const

export interface OpenAction extends Action {
  type: typeof actionTypes.OPEN;
  payload: {
    dialogState: ScheduleDialogState
  };
}

export interface CloseAction extends Action {
  type: typeof actionTypes.CLOSE;
}

export type ScheduleDialogActions = OpenAction | CloseAction;

// Action Creators
export const open = (dialogState: ScheduleDialogState): OpenAction => ({
  type: actionTypes.OPEN,
  payload: {
    dialogState
  }
});

export const close = (): CloseAction => ({
  type: actionTypes.CLOSE
});

// Reducers
const initialState: ScheduleDialogState = {
  activeDialog: 'NONE'
};

export const scheduleDialogReducer = (state: ScheduleDialogState = initialState, action: ScheduleDialogActions): ScheduleDialogState => {
  switch (action.type) {
    case actionTypes.OPEN: {
      const { dialogState } = action.payload;
      return dialogState;
    }

    case actionTypes.CLOSE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
