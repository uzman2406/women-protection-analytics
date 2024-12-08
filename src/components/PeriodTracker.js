// components/PeriodTracker.js
import React, { useState } from "react";
import "../styles/PeriodTracker.css";

function PeriodTracker() {
  const [nextPeriodDate, setNextPeriodDate] = useState("");

  const calculateNextPeriod = () => {
    const lastPeriodDate = document.getElementById("last-period").value;
    if (lastPeriodDate) {
      const lastDate = new Date(lastPeriodDate);
      const nextDate = new Date(lastDate);
      nextDate.setDate(nextDate.getDate() + 28); // Assuming a 28-day cycle
      setNextPeriodDate(`Your next expected date is: ${nextDate.toDateString()}`);
    }
  };

  return (
    <section id="period-tracker">
      <h2>Menstruation Cycle <i className="fa-solid fa-hand-holding-medical"></i></h2>
      <div className="tracker-container">
        <div className="tracker-content">
          <p>Enter the start date of your last menstruation:</p>
          <input type="date" id="last-period" />
          <button onClick={calculateNextPeriod}>Calculate Next Date</button>
          <p>{nextPeriodDate}</p>
        </div>
        <img src="/images/period.webp" alt="Period Tracker Illustration" className="tracker-image" />
      </div>
    </section>
  );
}

export default PeriodTracker;
