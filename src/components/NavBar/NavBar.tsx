import React from 'react';
import { CalendarState } from '../../types';
import { useAppSelector } from '../../hooks';
import style from './NavBar.module.scss';

const NavBar: React.FC = () => {
  const calendar: CalendarState = useAppSelector<CalendarState>(state => state.calendar);

  return (
    <nav className={`navbar ${style.container}`}>
      {calendar.year}年
      {calendar.month}月
    </nav>
  );
}

export default NavBar;
