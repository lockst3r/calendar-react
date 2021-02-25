import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { fetchEvents, deleteEvent } from '../../gateway/events';
import Modal from '../modal/Modal';
import './calendar.scss';

const Calendar = ({ weekDates, isOpenModalWindow, handleCloseModal }) => {
  const [events, setEvents] = useState([]);

  const getEventsList = () => {
    fetchEvents()
      .then(events =>
        setEvents(
          events.filter(
            event =>
              new Date(event.dateFrom) > new Date(weekDates[0]) &&
              new Date(event.dateFrom) < new Date(weekDates[6]),
          ),
        ),
      )
      .catch(error => alert(error.message));
  };

  useEffect(() => {
    getEventsList();
  }, [weekDates]);

  const handleDeleteEvent = id => {
    deleteEvent(id).then(() => getEventsList());
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={events} handleDeleteEvent={handleDeleteEvent} />
        </div>
      </div>
      {isOpenModalWindow && (
        <Modal handleCloseModal={handleCloseModal} getEventsList={getEventsList} />
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
