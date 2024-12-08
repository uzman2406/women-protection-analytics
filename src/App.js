import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import RelativeContacts from './components/RelativeContacts';
import HelplineNumbers from './components/HelplineNumbers';
import PeriodTracker from './components/PeriodTracker';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div>
    <Header />
    <Navbar />
    <RelativeContacts />
    <HelplineNumbers />
    <PeriodTracker />
    <Chatbot />
    <Footer />
  </div>
);

export default App;
