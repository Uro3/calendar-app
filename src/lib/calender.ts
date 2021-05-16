import { CalendarState } from '../types';

export const createCalenderState = (date: Date): CalendarState => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const days = getDaysInMonth(year, month);
  const extraPreviousDays = getCalendarPreviousMonthDays(year, month);
  const extraNextDays = getCalendarNextMonthDays(year, month);

  return {
    year,
    month,
    days,
    extraPreviousDays,
    extraNextDays
  };
};

// [start, start+1, ..., end-1, end] の配列を返す関数
const getNumberRangeArray = (start: number, end: number): number[] => {
  return [...Array(end - start + 1)].map((_, index) => index + start);
};

// 引数で与えられた年月に含まれる日付の配列を返す関数
const getDaysInMonth = (year: number, month: number): number[] => {
  const daysNum = new Date(year, month, 0).getDate();
  return getNumberRangeArray(1, daysNum);
};

// 引数で与えられた年月の前月の日付（カレンダーに表示する範囲）の配列を返す関数
const getCalendarPreviousMonthDays = (year: number, month: number): number[] => {
  const weekdayOfFirstDay = new Date(year, month - 1, 1).getDay();
  const PreviousMonthLastDay = new Date(year, month - 1, 0).getDate();
  return getNumberRangeArray(PreviousMonthLastDay - weekdayOfFirstDay + 1, PreviousMonthLastDay);
};

// 引数で与えられた年月の翌月の日付（カレンダーに表示する範囲）の配列を返す関数
const getCalendarNextMonthDays = (year: number, month: number): number[] => {
  const weekdayOfLastDay = new Date(year, month, 0).getDay();
  return getNumberRangeArray(1, 6 - weekdayOfLastDay);
};
