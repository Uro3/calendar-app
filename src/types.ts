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
  [id: string]: Schedule;
};

export type CalendarScheduleState = {
  // calenderKey: scheduleIds[]
  [calendarKey: string]: string[];
};

export type ScheduleDialogType = 'ADD' | 'SHOW' | 'EDIT' | 'NONE';

export type ScheduleDialogState = {
  activeDialog: ScheduleDialogType;
  scheduleId?: string;
  year?: number;
  month?: number;
  date?: number;
};
