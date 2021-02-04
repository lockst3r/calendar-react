import React from "react";
import PropTypes from "prop-types";
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
          <span>Delete</span>
        </button>
      )}
    </>
  );
};

Event.propTypes = {
  id: PropTypes.string.isRequired,
  changeStatusEvent: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  removeEvent: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Event;
