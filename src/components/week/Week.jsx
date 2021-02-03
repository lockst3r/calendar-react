import React from "react";
import Day from "../day/Day";
import "./week.scss";
import PropTypes from "prop-types";
const Week = ({ weekDates, events, changeStatusEvent, removeEvent }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        //getting all events from the day we will render
        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            changeStatusEvent={changeStatusEvent}
            removeEvent={removeEvent}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
events: PropTypes.array.isRequired,
changeStatusEvent: PropTypes.func.isRequired,
removeEvent: PropTypes.func.isRequired,
weekDates: PropTypes.array.isRequired
}

export default Week;
