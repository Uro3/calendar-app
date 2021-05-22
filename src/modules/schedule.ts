import { Action } from 'redux';
import { Schedule, ScheduleState } from '../types';

type ScheduleAddParams = {
  dateKey: string;
  title: string;
  comment: string;
  startTime: string;
  endTime: string;
};

// Types
export const actionTypes = {
  ADD: 'schedule/ADD',
  UPDATE: 'schedule/UPDATE',
  REMOVE: 'schedule/REMOVE'
} as const

export interface AddAction extends Action {
  type: typeof actionTypes.ADD;
  payload: {
    params: ScheduleAddParams
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
    id: string
  };
}

export type ScheduleActions = AddAction | UpdateAction | RemoveAction;

// Action Creators
export const add = (params: ScheduleAddParams): AddAction => ({
  type: actionTypes.ADD,
  payload: {
    params
  }
});

export const update = (schedule: Schedule): UpdateAction => ({
  type: actionTypes.UPDATE,
  payload: {
    schedule
  }
});

export const remove = (id: string): RemoveAction => ({
  type: actionTypes.REMOVE,
  payload: {
    id
  }
});

// Reducers
export const scheduleReducer = (state: ScheduleState = {}, action: ScheduleActions): ScheduleState => {
  switch (action.type) {
    case actionTypes.ADD: {
      const { params } = action.payload;
      const id: string = `${Math.random()}`;
      const newSchedule: Schedule = {
        id,
        ...params
      };
      return {
        ...state,
        [id]: newSchedule
      };
    }

    case actionTypes.UPDATE: {
      const { schedule } = action.payload;
      return {
        ...state,
        [schedule.id]: schedule
      };
    }

    case actionTypes.REMOVE: {
      const { id } = action.payload;
      const { [id]: _, ...newState } = state;
      return newState;
    }
    default: {
      return state;
    }
  }
};
