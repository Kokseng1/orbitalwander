import logo from './logo.svg';
import './App.css';
import PageOne from './Components/PageOne';
import PageTwo from './Components/PageTwo';
import PageThree from './Components/PageThree';
import PageFour from './Components/PageFour';
import Text from './Components/Text';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{textAlign: 'center'}}>
      <h1 class = "header">
      Project Wander
      </h1>
      <p class = "main" style={{ fontSize: '16px' }}> 
      <Router>
      <Routes>
        <Route path="/" element={<Text/>} />
        <Route path="/PageOne" element={<PageOne />} />
        <Route path="/PageTwo" element={<PageTwo />} />
        <Route path="/PageThree" element={<PageThree />} />
        <Route path="/PageFour" element={<PageFour />} />
      </Routes>
    </Router>
      </p>
    </div>
  );
}

export default App;