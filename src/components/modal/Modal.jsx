import React, { useState } from "react";
import moment from "moment";
import { getDateTime } from "../../utils/dateUtils";
import "./modal.scss";
import { createEvent } from "../../gateway/events";
import PropTypes from "prop-types";

const Modal = ({ closeModal, serverRequest }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const eventFields = {
      title: title,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
      description: description,
      status: false,
    };

    createEvent(eventFields).then(() => serverRequest());
    closeModal();
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={closeModal}>
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={(e) => setStartTime(e.target.value)}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="event-form__submit-btn"
              onClick={handleSubmit}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  serverRequest: PropTypes.func.isRequired,
};

export default Modal;
