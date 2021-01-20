import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { generateId } from '../utils/generateId';
import Header from './Header';
import Routes from './Routes';
import './App.css';

function App() {
  // only generate id if one doesn't exist
  const userId = localStorage.getItem('userId') || generateId();

  useEffect(() => {
    localStorage.setItem('userId', userId);
  }, [userId]);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes userId={userId} />
      </div>
    </Router>
  );
}

export default App;
