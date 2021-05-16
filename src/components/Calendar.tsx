import React from 'react';
import CalenderItem from './CalenderItem';

const dateList: string[] = ['hoge', 'fuga', 'piyo'];

const Calendar: React.FC = () => {
  const list = dateList.map(date => 
    <CalenderItem date={date}></CalenderItem>
  );
  return (
    <>
      {list}
    </>
  );
}

export default Calendar;
