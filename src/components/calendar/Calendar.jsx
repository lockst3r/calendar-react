import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import { fetchEvents, updateEvent, deleteEvent } from "../../gateway/events";
import Modal from "../modal/Modal";
import "./calendar.scss";

const Calendar = ({ weekDates, openModal, closeModal }) => {
  const [events, setEvents] = useState([]);

  const serverRequest = () => {
    fetchEvents()
      .then((events) => setEvents(events))
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    serverRequest();
  }, []);

  const changeStatusEvent = (id) => {
    const { status, ...event } = events.find((item) => item.id == id);

    const updatedData = {
      status: !status,
      ...event,
    };
    updateEvent(id, updatedData).then(() => serverRequest());
  };

  const removeEvent = (id) => {
    deleteEvent(id).then(() => serverRequest());
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            changeStatusEvent={changeStatusEvent}
            removeEvent={removeEvent}
          />
        </div>
      </div>
      {openModal && (
        <Modal closeModal={closeModal} serverRequest={serverRequest} />
      )}
    </section>
  );
};

Calendar.propTypes = {
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  weekDates: PropTypes.array.isRequired,
};

export default Calendar;
