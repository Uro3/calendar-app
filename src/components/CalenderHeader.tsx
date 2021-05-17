import React from 'react';

type Props = {
  value: string;
};

const CalendarHeader: React.FC<Props> = props => {
  return (
    <>
      {props.value}
    </>
  );
}

export default CalendarHeader;
