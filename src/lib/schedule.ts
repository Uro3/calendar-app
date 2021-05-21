import { Schedule, ScheduleState } from '../types';

export const addSchedule = (state: ScheduleState, schedule: Schedule): ScheduleState => {
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

export const removeSchedule = (state: ScheduleState, schedule: Schedule): ScheduleState => {
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

export const updateSchedule = (state: ScheduleState, schedule: Schedule): ScheduleState => {
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
