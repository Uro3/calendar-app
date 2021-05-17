export type CalendarContent = {
  month: number;
  date: number;
};

export type CalendarState = {
  year: number;
  month: number;
  contents: CalendarContent[];
};
