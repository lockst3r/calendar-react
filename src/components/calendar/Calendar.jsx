import React, { useEffect, useState } from "react";

import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import { fetchEvents, updateEvent, deleteEvent } from "../../gateway/events";
import Modal from "../modal/Modal";
import "./calendar.scss";

const Calendar = ({ weekDates, openModal, closeModal }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then((res) => setEvents(res));
  }, []);

  const changeStatusEvent = (id) => {
    const { status, ...event } = events.find((item) => item.id == id);

   const updatedData = {
      status: !status,
      ...event,
    };
    updateEvent(id, updatedData)
      .then(() => fetchEvents())
      .then((res) => setEvents(res));
  };

  const removeEvent = (id) =>{
     deleteEvent(id)
    .then(() => fetchEvents())
    .then((res) => setEvents(res))
  }

   

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
      {openModal && <Modal closeModal={closeModal}/>}
    </section>
  );
};

export default Calendar;
