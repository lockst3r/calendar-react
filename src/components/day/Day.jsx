import React from "react";
import Hour from "../hour/Hour";
import PropTypes from 'prop-types';
import "./day.scss";

const Day = ({ dataDay, dayEvents, changeStatusEvent, removeEvent }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            changeStatusEvent={changeStatusEvent}
            removeEvent={removeEvent}
          />
        );
      })}
    </div>
  );
};


Day.propTypes = {
dataDay: PropTypes.number.isRequired,
changeStatusEvent: PropTypes.func.isRequired,
dayEvents: PropTypes.array.isRequired,
removeEvent: PropTypes.func.isRequired
}

export default Day;
