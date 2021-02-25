import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

const Hour = ({ hourDay, hourEvents, handleDeleteEvent, dateDayPositionRedLine }) => {
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHour(hour + 1);
    }
    const interval = setInterval(() => {
      setMinutes(minutes + 1);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="calendar__time-slot" data-time={hourDay + 1}>
      {dateDayPositionRedLine && hourDay == hour ? (
        <div style={{ top: minutes }} className="red-line"></div>
      ) : null}

      {hourEvents.map(({ id, dateFrom, dateTo, title, status }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            id={id}
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            handleDeleteEvent={handleDeleteEvent}
            status={status}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  hourDay: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  handleDeleteEvent: PropTypes.func.isRequired,
};

export default Hour;
