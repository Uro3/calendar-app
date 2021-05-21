import { Action } from 'redux';
import { Schedule, ScheduleState } from '../types';
import { addSchedule, updateSchedule, removeSchedule } from '../lib/schedule';

// Types
export const actionTypes = {
  ADD: 'schedule/ADD',
  UPDATE: 'schedule/UPDATE',
  REMOVE: 'schedule/REMOVE'
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

export type ScheduleActions = AddAction | UpdateAction | RemoveAction;

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
export const scheduleReducer = (state: ScheduleState = null, action: ScheduleActions): ScheduleState => {
  switch (action.type) {
    case actionTypes.ADD: {
      const { schedule } = action.payload;
      const newState = addSchedule(state, schedule);
      return newState;
    }

    case actionTypes.UPDATE: {
      const { schedule } = action.payload;
      const newState = updateSchedule(state, schedule);
      return newState;
    }

    case actionTypes.REMOVE: {
      const { schedule } = action.payload;
      const newState = removeSchedule(state, schedule);
      return newState;
    }
    default: {
      return state;
    }
  }
};
