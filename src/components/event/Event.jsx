import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './event.scss';

const Event = ({ height, marginTop, title, time, id, handleDeleteEvent }) => {
  const [eventStatus, setEventStatus] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  const buttonStyle = {
    marginTop: height + marginTop,
  };

  return (
    <>
      <div style={eventStyle} className="event" onClick={() => setEventStatus(!eventStatus)}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {eventStatus && (
        <button
          style={buttonStyle}
          className="delete-event-btn"
          onClick={() => handleDeleteEvent(id)}
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
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  handleDeleteEvent: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Event;
