import { Action } from 'redux';
import { CalendarState } from '../types';
import { createCalendarState } from '../services/calendar';

// Types
export const actionTypes = {
  RESET: 'calendar/RESET',
  UPDATE: 'calendar/UPDATE'
} as const

export interface ResetAction extends Action {
  type: typeof actionTypes.RESET;
}

export interface UpdateAction extends Action {
  type: typeof actionTypes.UPDATE;
  payload: {
    year: number;
    month: number;
  };
}

export type CalendarActions = ResetAction | UpdateAction;

// Action Creators
export const reset = (): ResetAction => ({
  type: actionTypes.RESET
});

export const update = (year: number, month: number): UpdateAction => ({
  type: actionTypes.UPDATE,
  payload: {
    year: year,
    month: month
  }
});

// Reducers
const initialState: CalendarState = createCalendarState(new Date());

export const calendarReducer = (state: CalendarState = initialState, action: CalendarActions): CalendarState => {
  switch (action.type) {
    case actionTypes.RESET: {
      return initialState;
    }
    case actionTypes.UPDATE: {
      const { year, month } = action.payload;
      const newDate = new Date(year, month - 1);
      return createCalendarState(newDate);
    }
    default: {
      return state;
    }
  }
};
