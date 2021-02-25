import React from 'react';
import Hour from '../hour/Hour';
import PropTypes from 'prop-types';
import './day.scss';

const Day = ({ dataDay, dayEvents, handleDeleteEvent, dateDayPositionRedLine }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            hourDay={hour}
            hourEvents={hourEvents}
            handleDeleteEvent={handleDeleteEvent}
            dateDayPositionRedLine={dateDayPositionRedLine}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
  handleDeleteEvent: PropTypes.func.isRequired,
};

export default Day;
