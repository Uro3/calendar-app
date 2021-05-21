import React from 'react';

type Props = {
  value: string;
};

const CalendarHeader: React.FC<Props> = props => {
  return (
    <div className="has-text-centered is-size-7 py-1">
      <span className="has-text-grey">
        {props.value}
      </span>
    </div>
  );
}

export default CalendarHeader;
