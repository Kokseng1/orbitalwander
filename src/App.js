import logo from './logo.svg';
import './App.css';
import PageOne from './Components/PageOne';
import PageTwo from './Components/PageTwo';
import PageThree from './Components/PageThree';
import PageFour from './Components/PageFour';
import PageFiveL from './Components/PageFiveL';
import PageFiveW from './Components/PageFiveW';
import PageFive from './Components/PageFive';
import PageSix from './Components/PageSix';
import PageSeven from './Components/PageSeven';
import PageSevenOutcome from './Components/PageSevenOutcome';
import PageEight from './Components/PageEight';
import PageNine from './Components/PageNine';
import PageTen from './Components/PageTen';
import PageTenWin from './Components/PageTenWin';
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
        <Route path="/PageSix" element={<PageSix />} />
        <Route path="/PageSeven" element={<PageSeven />} />
        <Route path="/Text" element={<Text />} />
        <Route path="/PageSevenOutcome" element={<PageSevenOutcome />} />
        <Route path="/PageEight" element={<PageEight />} />
        <Route path="/PageNine" element={<PageNine />} />
        <Route path="/PageTen" element={<PageTen />} />
        <Route path="/PageTenWin" element={<PageTenWin />} />
      </Routes>
    </Router>
      </p>
    </div>
  );
}

export default App;