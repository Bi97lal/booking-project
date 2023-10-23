import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Course from './pages/courses';
import BookingForm from './pages/BookingForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<Course />} />
        <Route path="/courses/:id/booking" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
