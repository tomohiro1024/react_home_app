import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Report from './pages/Report.tsx';
import Home from './pages/Home.tsx';
import NoMach from './pages/NoMach';
import AppLayout from './components/layout/AppLayout';

function App() {
  // test
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />}/>
          <Route path='/report' element={<Report />}/>
          <Route path='*' element={<NoMach />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
