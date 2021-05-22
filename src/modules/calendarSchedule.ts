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
    calendarDate: string;
    scheduleId: string;
  };
}

export interface RemoveAction extends Action {
  type: typeof actionTypes.REMOVE;
  payload: {
    calendarDate: string;
    scheduleId: string;
  };
}

export type CalendarScheduleActions = AddAction | RemoveAction;

// Action Creators
export const add = (calendarDate: string, scheduleId: string): AddAction => ({
  type: actionTypes.ADD,
  payload: {
    calendarDate,
    scheduleId
  }
});

export const remove = (calendarDate: string, scheduleId: string): RemoveAction => ({
  type: actionTypes.REMOVE,
  payload: {
    calendarDate,
    scheduleId
  }
});

// Reducers
export const calendarScheduleReducer = (state: CalendarScheduleState = {}, action: CalendarScheduleActions): CalendarScheduleState => {
  switch (action.type) {
    case actionTypes.ADD: {
      const { calendarDate, scheduleId } = action.payload;
      const oldScheduleIds = state[calendarDate] || [];
      const newScheduleIds = [...oldScheduleIds, scheduleId];
      return {
        ...state,
        [calendarDate]: newScheduleIds
      };
    }

    case actionTypes.REMOVE: {
      const { calendarDate, scheduleId } = action.payload;
      const oldScheduleIds = state[calendarDate] || [];
      const newScheduleIds = oldScheduleIds.filter(id => id !== scheduleId);
      return {
        ...state,
        [calendarDate]: newScheduleIds
      };
    }
    default: {
      return state;
    }
  }
};
