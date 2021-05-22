import { CalendarContent, CalendarState } from '../types';

export const createCalendarKey = (year: number, month: number, date: number): string => {
  const paddedMonth: string = month.toString().padStart(2, '0');
  const paddedDate: string = date.toString().padStart(2, '0');
  return `${year}-${paddedMonth}-${paddedDate}`;
};

export const createCalendarState = (date: Date): CalendarState => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dates = getDatesInMonth(year, month);
  const extraPreviousDates = getCalendarPreviousMonthDates(year, month);
  const extraNextDates = getCalendarNextMonthDates(year, month);

  const contents = [
    ...createCalendarContent(extraPreviousDates, month - 1, year),
    ...createCalendarContent(dates, month, year),
    ...createCalendarContent(extraNextDates, month + 1, year)
  ];

  return {
    year,
    month,
    contents
  };
};

const createCalendarContent = (dates: number[], month: number, year: number): CalendarContent[] => {
  return dates.map(date => {
    return {
      key: createCalendarKey(year, month, date),
      date,
      month,
      year
    };
  });
};

// 引数で与えられた年月に含まれる日付の配列を返す関数
const getDatesInMonth = (year: number, month: number): number[] => {
  const datesNum = new Date(year, month, 0).getDate();
  return getNumberRangeArray(1, datesNum);
};

// 引数で与えられた年月の前月の日付（カレンダーに表示する範囲）の配列を返す関数
const getCalendarPreviousMonthDates = (year: number, month: number): number[] => {
  const dayOfFirstDate = new Date(year, month - 1, 1).getDay();
  const PreviousMonthLastDate = new Date(year, month - 1, 0).getDate();
  return getNumberRangeArray(PreviousMonthLastDate - dayOfFirstDate + 1, PreviousMonthLastDate);
};

// 引数で与えられた年月の翌月の日付（カレンダーに表示する範囲）の配列を返す関数
const getCalendarNextMonthDates = (year: number, month: number): number[] => {
  const dayOfLastDate = new Date(year, month, 0).getDay();
  return getNumberRangeArray(1, 6 - dayOfLastDate);
};

// [start, start+1, ..., end-1, end] の配列を返す関数
const getNumberRangeArray = (start: number, end: number): number[] => {
  return [...Array(end - start + 1)].map((_, index) => index + start);
};
