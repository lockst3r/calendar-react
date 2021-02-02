import React, { useState } from "react";

import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import ourEvents from "../../gateway/events";
import Modal from '../modal/Modal';
import "./calendar.scss";

const Calendar = ({ weekDates, openModal, closeModal }) => {
  const [events] = useState(ourEvents);

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={events} />
        </div>
      </div>
      {openModal && <Modal closeModal={closeModal}/>}
    </section>
  );
};

export default Calendar;
