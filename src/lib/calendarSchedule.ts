import { Schedule, CalendarScheduleState } from '../types';

export const addCalendarSchedule = (state: CalendarScheduleState, schedule: Schedule): CalendarScheduleState => {
  const { calendarKey } = schedule;
  let newSchedules = [schedule];
  if (state) {
    const oldSchedules = state[calendarKey];
    if (oldSchedules) {
      newSchedules = [
        ...oldSchedules,
        schedule
      ];
    }
  }
  return {
    ...state,
    [calendarKey]: newSchedules
  };
};

export const removeCalendarSchedule = (state: CalendarScheduleState, schedule: Schedule): CalendarScheduleState => {
  const { calendarKey } = schedule;
  if (!state) {
    return state;
  }
  const oldSchedules = state[calendarKey];
  const newSchedules = oldSchedules.filter(oldSchedule => oldSchedule.id !== schedule.id);
  return {
    ...state,
    [calendarKey]: newSchedules
  };
};

export const updateCalendarSchedule = (state: CalendarScheduleState, schedule: Schedule): CalendarScheduleState => {
  const { calendarKey } = schedule;
  if (!state) {
    return state;
  }
  const oldSchedules = state[calendarKey];
  const newSchedules = oldSchedules.map(oldSchedule => {
    if (oldSchedule.id === schedule.id) {
      return schedule;
    } else {
      return oldSchedule;
    }
  });
  return {
    ...state,
    [calendarKey]: newSchedules
  };
};
