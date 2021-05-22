import { Action } from 'redux';
import { CalendarScheduleState } from '../types';

// Types
export const actionTypes = {
  ADD: 'calendarSchedule/ADD',
  REMOVE: 'calendarSchedule/REMOVE'
} as const

export interface AddAction extends Action {
  type: typeof actionTypes.ADD;
  payload: {
    calendarKey: string;
    scheduleId: string;
  };
}

export interface RemoveAction extends Action {
  type: typeof actionTypes.REMOVE;
  payload: {
    calendarKey: string;
    scheduleId: string;
  };
}

export type CalendarScheduleActions = AddAction | RemoveAction;

// Action Creators
export const add = (calendarKey: string, scheduleId: string): AddAction => ({
  type: actionTypes.ADD,
  payload: {
    calendarKey,
    scheduleId
  }
});

export const remove = (calendarKey: string, scheduleId: string): RemoveAction => ({
  type: actionTypes.REMOVE,
  payload: {
    calendarKey,
    scheduleId
  }
});

// Reducers
export const calendarScheduleReducer = (state: CalendarScheduleState = {}, action: CalendarScheduleActions): CalendarScheduleState => {
  switch (action.type) {
    case actionTypes.ADD: {
      const { calendarKey, scheduleId } = action.payload;
      const oldScheduleIds = state[calendarKey] || [];
      const newScheduleIds = [...oldScheduleIds, scheduleId];
      return {
        ...state,
        [calendarKey]: newScheduleIds
      };
    }

    case actionTypes.REMOVE: {
      const { calendarKey, scheduleId } = action.payload;
      const oldScheduleIds = state[calendarKey] || [];
      const newScheduleIds = oldScheduleIds.filter(id => id !== scheduleId);
      return {
        ...state,
        [calendarKey]: newScheduleIds
      };
    }
    default: {
      return state;
    }
  }
};
