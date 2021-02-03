import React from "react";
import PropTypes from "prop-types";
import Event from "../event/Event";
import { formatMins } from "../../../src/utils/dateUtils.js";

const Hour = ({ dataHour, hourEvents, changeStatusEvent, removeEvent }) => {


  return (
    
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      <div className="red-line"></div>
      {hourEvents.map(({ id, dateFrom, dateTo, title, status }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          

          <Event
            key={id}
            id={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            removeEvent={removeEvent}
            status={status}
            changeStatusEvent={changeStatusEvent}
          />
        );
      })}
    </div>);
};

Hour.propTypes ={
changeStatusEvent: PropTypes.func.isRequired,
dataHour: PropTypes.number.isRequired,
hourEvents: PropTypes.array.isRequired,
removeEvent: PropTypes.func.isRequired
}

export default Hour;
