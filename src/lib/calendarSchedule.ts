import { Schedule, CalendarScheduleState } from '../types';

export const addCalendarSchedule = (state: CalendarScheduleState, schedule: Schedule): CalendarScheduleState => {
  const { dateKey } = schedule;
  let newSchedules = [schedule];
  if (state) {
    const oldSchedules = state[dateKey];
    if (oldSchedules) {
      newSchedules = [
        ...oldSchedules,
        schedule
      ];
    }
  }
  return {
    ...state,
    [dateKey]: newSchedules
  };
};

export const removeCalendarSchedule = (state: CalendarScheduleState, schedule: Schedule): CalendarScheduleState => {
  const { dateKey } = schedule;
  if (!state) {
    return state;
  }
  const oldSchedules = state[dateKey];
  const newSchedules = oldSchedules.filter(oldSchedule => oldSchedule.id !== schedule.id);
  return {
    ...state,
    [dateKey]: newSchedules
  };
};

export const updateCalendarSchedule = (state: CalendarScheduleState, schedule: Schedule): CalendarScheduleState => {
  const { dateKey } = schedule;
  if (!state) {
    return state;
  }
  const oldSchedules = state[dateKey];
  const newSchedules = oldSchedules.map(oldSchedule => {
    if (oldSchedule.id === schedule.id) {
      return schedule;
    } else {
      return oldSchedule;
    }
  });
  return {
    ...state,
    [dateKey]: newSchedules
  };
};

export const createDateKey = (year: number, month: number, date: number): string => {
  return `${year}-${month}-${date}`;
};
