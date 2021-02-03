import React, { useState } from "react";

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

export default Hour;
