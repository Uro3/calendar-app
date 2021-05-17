import { CalendarState } from '../types';

export const createCalenderState = (date: Date): CalendarState => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dates = getDatesInMonth(year, month);
  const extraPreviousDates = getCalendarPreviousMonthDates(year, month);
  const extraNextDates = getCalendarNextMonthDates(year, month);

  return {
    year,
    month,
    dates,
    extraPreviousDates,
    extraNextDates
  };
};

// [start, start+1, ..., end-1, end] の配列を返す関数
const getNumberRangeArray = (start: number, end: number): number[] => {
  return [...Array(end - start + 1)].map((_, index) => index + start);
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
