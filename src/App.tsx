import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Form from './form';
import Test from './test';
import Details from './details';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/details" element={<Details/>} />
        </Routes>
    </Router>
  );
}

export default App;
