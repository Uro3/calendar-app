export type CalendarContent = {
  calendarDate: string;
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
  calendarDate: string;
  title: string;
  comment: string;
  startTime: string;
  endTime: string;
};

export type ScheduleState = {
  [id: string]: Schedule;
};

export type CalendarScheduleState = {
  [calendarDate: string]: string[]; // calendarDate: scheduleIds[]
};

export type ScheduleDialogType = 'ADD' | 'SHOW' | 'EDIT' | 'NONE';

export type ScheduleDialogState = {
  activeDialog: ScheduleDialogType;
  scheduleId?: string;
  year?: number;
  month?: number;
  date?: number;
};
