import React from 'react';
import { CalendarState } from '../../types';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { update, reset } from '../../modules/calendar';
import style from './NavBar.module.scss';

const NavBar: React.FC = () => {
  const calendar: CalendarState = useAppSelector<CalendarState>(state => state.calendar);
  const dispatch = useAppDispatch();

  const jumpToCurrent = () => {
    dispatch(reset());
  };

  const jumpToPrevious = () => {
    dispatch(update(calendar.year, calendar.month - 1));
  };

  const jumpToNext = () => {
    dispatch(update(calendar.year, calendar.month + 1));
  };

  return (
    <nav className={`navbar ${style.container}`}>
      <div className="navbar-brand">
        <div className="navbar-item">
          <span className="is-size-5">
            カレンダー
          </span>
        </div>
        <div className="navbar-item">
          <button className="button is-small" onClick={jumpToCurrent}>
            今日
          </button>
        </div>
        <div className="navbar-item">
          <button className="button is-white is-small is-rounded" onClick={jumpToPrevious}>
            <span className="icon">
              <i className="fas fa-chevron-left"></i>
            </span>
          </button>
          <button className="button is-white is-small is-rounded" onClick={jumpToNext}>
            <span className="icon">
              <i className="fas fa-chevron-right"></i>
            </span>
          </button>
        </div>
        <div className="navbar-item">
          <span className="is-size-5">
            {calendar.year}年 {calendar.month}月
          </span>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <span className="icon is-medium">
              <i className="fas fa-lg fa-user"></i>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
