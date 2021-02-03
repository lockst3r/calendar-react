import React from "react";

import "./event.scss";

const Event = ({
  height,
  marginTop,
  title,
  time,
  id,
  changeStatusEvent,
  status,
  removeEvent,
}) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const buttonStyle = {
    marginTop: height + marginTop,
  };

  return (
    <>
      <div
        style={eventStyle}
        className="event"
        onClick={() => changeStatusEvent(id)}
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {status && (
        <button
          style={buttonStyle}
          className="delete-event-btn"
          onClick={() => removeEvent(id)}
        >
          <i className="fas fa-trash-alt"></i>
          {` Delete`}
        </button>
      )}
    </>
  );
};

export default Event;
