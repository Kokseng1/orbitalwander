import logo from './logo.svg';
import './App.css';
import PageOne from './Components/PageOne';
import PageTwo from './Components/PageTwo';
import PageThree from './Components/PageThree';
import PageFour from './Components/PageFour';
import PageFiveL from './Components/PageFiveL';
import PageFiveW from './Components/PageFiveW';
import PageFive from './Components/PageFive';
import Text from './Components/Text';
import Login from './Components/Login';
import React, {createContext, useState} from 'react';
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
        <Route path="/" element={<Login/>} />
        <Route path="/PageOne" element={<PageOne />} />
        <Route path="/PageTwo" element={<PageTwo />} />
        <Route path="/PageThree" element={<PageThree />} />
        <Route path="/PageFour" element={<PageFour />} />
        <Route path="/PageFiveL" element={<PageFiveL />} />
        <Route path="/PageFiveW" element={<PageFiveW />} />
        <Route path="/PageFive" element={<PageFive />} />
        <Route path="/Text" element={<Text />} />
      </Routes>
    </Router>
      </p>
    </div>
  );
}

export default App;