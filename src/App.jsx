import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [today, setToday] = useState(new Date());
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);

  const handleNextWeek = () => {
    setToday(new Date(today.setDate(today.getDate() + 7)));
  };

  const handlePrevWeek = () => {
    setToday(new Date(today.setDate(today.getDate() - 7)));
  };

  const handleTodayWeek = () => {
    setToday(new Date());
  };

  const handleOpenModal = () => {
    setIsOpenModalWindow(true);
  };

  const handleCloseModal = () => {
    setIsOpenModalWindow(false);
  };

  const weekDates = generateWeekRange(getWeekStartDate(today));

  return (
    <>
      <Header
        nextWeek={handleNextWeek}
        prevWeek={handlePrevWeek}
        todayWeek={handleTodayWeek}
        weekDates={weekDates}
        openModal={handleOpenModal}
      />
      <Calendar
        weekDates={weekDates}
        openModal={isOpenModalWindow}
        closeModal={handleCloseModal}
      />
    </>
  );
};
export default App;
