export type CalendarContent = {
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
  dateKey: string;
  title: string;
  comment: string;
  startTime: string;
  endTime: string;
};

export type ScheduleState = {
  [key: string]: Schedule[]
} | null;
