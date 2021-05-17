import React from 'react';

type Props = {
  value: string;
};

const CalendarHeader: React.FC<Props> = props => {
  return (
    <>
      <span className='has-text-grey'>
        {props.value}
      </span>
    </>
  );
}

export default CalendarHeader;
