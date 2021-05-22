import { Action } from 'redux';
import { Schedule, CalendarScheduleState } from '../types';
import { addCalendarSchedule, updateCalendarSchedule, removeCalendarSchedule } from '../lib/calendarSchedule';

// Types
export const actionTypes = {
  ADD: 'calendarSchedule/ADD',
  UPDATE: 'calendarSchedule/UPDATE',
  REMOVE: 'calendarSchedule/REMOVE'
} as const

export interface AddAction extends Action {
  type: typeof actionTypes.ADD;
  payload: {
    schedule: Schedule
  };
}

export interface UpdateAction extends Action {
  type: typeof actionTypes.UPDATE;
  payload: {
    schedule: Schedule
  };
}

export interface RemoveAction extends Action {
  type: typeof actionTypes.REMOVE;
  payload: {
    schedule: Schedule
  };
}

export type CalendarScheduleActions = AddAction | UpdateAction | RemoveAction;

// Action Creators
export const add = (schedule: Schedule): AddAction => ({
  type: actionTypes.ADD,
  payload: {
    schedule
  }
});

export const update = (schedule: Schedule): UpdateAction => ({
  type: actionTypes.UPDATE,
  payload: {
    schedule
  }
});

export const remove = (schedule: Schedule): RemoveAction => ({
  type: actionTypes.REMOVE,
  payload: {
    schedule
  }
});

// Reducers
export const calendarScheduleReducer = (state: CalendarScheduleState = null, action: CalendarScheduleActions): CalendarScheduleState => {
  switch (action.type) {
    case actionTypes.ADD: {
      const { schedule } = action.payload;
      const newState = addCalendarSchedule(state, schedule);
      return newState;
    }

    case actionTypes.UPDATE: {
      const { schedule } = action.payload;
      const newState = updateCalendarSchedule(state, schedule);
      return newState;
    }

    case actionTypes.REMOVE: {
      const { schedule } = action.payload;
      const newState = removeCalendarSchedule(state, schedule);
      return newState;
    }
    default: {
      return state;
    }
  }
};
