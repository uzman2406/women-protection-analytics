import React, { useState } from 'react';
import '../styles/RelativeContacts.css';

const RelativeContacts = () => {
  const [contactInfo, setContactInfo] = useState('');

  const saveContact = () => {
    const name = document.getElementById('relative-name').value;
    const number = document.getElementById('relative-number').value;
    if (name && number) {
      setContactInfo(`Contact saved: ${name} - ${number}`);
    } else {
      alert('Please enter both name and phone number.');
    }
  };

  return (
    <section id="relative-contacts">
      <h2>Relative Contacts <i className="fa-solid fa-id-badge"></i></h2>
      <div className="relative-contacts-container">
        <div className="contact-form">
          <p>Add a relative's contact information:</p>
          <input type="text" id="relative-name" placeholder="Enter name" />
          <input type="tel" id="relative-number" placeholder="Enter phone number" />
          <button onClick={saveContact}>Save Contact</button>
          <p>{contactInfo}</p>
        </div>
        <img src="/images/number.webp" alt="Contacts Illustration" className="contact-image" />
      </div>
    </section>
  );
};

export default RelativeContacts;
