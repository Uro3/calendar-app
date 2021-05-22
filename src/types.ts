export type CalendarContent = {
  key: string;
  year: number;
  month: number;
  date: number;
};

export type CalendarState = {
  year: number;
  month: number;
  contents: CalendarContent[];
};

export type Schedule = {
  id: string;
  calendarKey: string;
  title: string;
  comment: string;
  startTime: string;
  endTime: string;
};

export type ScheduleState = {
  [id: string]: Schedule
};

export type CalendarScheduleState = {
  [calendarKey: string]: Schedule[]
};

export type ScheduleDialogType = 'ADD' | 'UPDATE' | 'REMOVE' | 'NONE';

export type ScheduleDialogState = {
  activeDialog: ScheduleDialogType;
  year?: number;
  month?: number;
  date?: number;
};
