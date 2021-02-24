import React from 'react';
import PropTypes from 'prop-types';
import { days } from '../../utils/dateUtils.js';
import moment from 'moment';
import className from 'classnames';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => {
        const styleToday =
          moment(dayDate).format('MMMM DD YYYY') == moment(new Date()).format('MMMM DD YYYY');

        return (
          <div className="calendar__day-label day-label" key={dayDate}>
            <span
              className={className('day-label__day-name', {
                'day-label__day-today': styleToday,
              })}
            >
              {days[dayDate.getDay()]}
            </span>
            <span
              className={className('day-label__day-number', {
                'day-label__day-today': styleToday,
              })}
            >
              {dayDate.getDate()}
            </span>
          </div>
        );
      })}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;
