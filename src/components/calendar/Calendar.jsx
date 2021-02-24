import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { fetchEvents, deleteEvent } from '../../gateway/events';
import Modal from '../modal/Modal';
import './calendar.scss';
import moment from 'moment';

const Calendar = ({ weekDates, openModal, closeModal }) => {
  const [events, setEvents] = useState([]);

  const getEventsList = () => {
    fetchEvents()
      .then(events => {
        const dataWeek = weekDates.map(el => moment(el).format('MMMM DD YYYY'));
        const newEvents = events.filter(({ dateFrom }) =>
          dataWeek.includes(moment(dateFrom).format('MMMM DD YYYY')),
        );
        return setEvents(newEvents);
      })
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
      {openModal && <Modal closeModal={closeModal} getEventsList={getEventsList} />}
    </section>
  );
};

Calendar.propTypes = {
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  weekDates: PropTypes.array.isRequired,
};

export default Calendar;
