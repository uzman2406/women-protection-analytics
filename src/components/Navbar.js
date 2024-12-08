import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav>
    <button onClick={() => window.location.href = '#relative-contacts'}>
      Relative Contacts <i className="fa-solid fa-id-badge"></i>
    </button>
    <button onClick={() => window.location.href = '#helpline-numbers'}>
      Helpline Numbers <i className="fa-solid fa-hands-holding-child"></i>
    </button>
    <button onClick={() => window.location.href = '#period-tracker'}>
      Menstruation Cycle <i className="fa-solid fa-hand-holding-medical"></i>
    </button>
    <button onClick={() => window.location.href = '#chatbot'}>
      Chatbot For Help <i className="fa-solid fa-robot"></i>
    </button>
  </nav>
);

export default Navbar;
