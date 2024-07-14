import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;