import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Report from './pages/Report.tsx';
import Home from './pages/Home.tsx';
import NoMach from './pages/NoMach';

function App() {
  // test
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/report' element={<Report />}/>
        <Route path='*' element={<NoMach />}/>
      </Routes>
    </Router>
  );
}

export default App;
