import React from 'react';
import Day from '../day/Day';
import './week.scss';
import PropTypes from 'prop-types';
import moment from 'moment';

const Week = ({ weekDates, events, handleDeleteEvent }) => {
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

        const dayEvents = events.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd,
        );

        const dataRedLine =
          moment(dayStart).format('MMMM DD YYYY') == moment(new Date()).format('MMMM DD YYYY');

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            handleDeleteEvent={handleDeleteEvent}
            day={dayStart}
            dataRedLine={dataRedLine}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  events: PropTypes.array.isRequired,
  handleDeleteEvent: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
};

export default Week;
