// components/HelplineNumbers.js
import React, { useState } from "react";
import "../styles/HelplineNumbers.css";

function HelplineNumbers() {
  const [helplineInfo, setHelplineInfo] = useState("");

  const handleDropdownChange = (e) => {
    const selected = e.target.value;
    setHelplineInfo(selected ? `Dial ${selected} for immediate help.` : "");
  };

  return (
    <section id="helpline-numbers">
      <h2>Helpline Numbers <i className="fa-solid fa-hands-holding-child"></i></h2>
      <div className="helpline-container">
        <div className="helpline-content">
          <p>Select a helpline from the dropdown menu:</p>
          <select onChange={handleDropdownChange}>
            <option value="">--Select a helpline--</option>
            <option value="100">Police: 100</option>
            <option value="1091">Women's Helpline: 1091</option>
            <option value="112">Emergency: 112</option>
          </select>
          <p>{helplineInfo}</p>
        </div>
        <img src="/images/helpline.png" alt="Helpline Illustration" className="helpline-image" />
      </div>
    </section>
  );
}

export default HelplineNumbers;
