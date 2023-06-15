import logo from './logo.svg';
import './App.css';
import PageOne from './Components/PageOne';
import Options from './Components/Options';
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
      <Text />  
      <Router>
      <Routes>
        <Route path="/" element={<Options/>} />
        <Route path="/PageOne" element={<PageOne />} />
      </Routes>
    </Router>
      </p>
    </div>
  );
}

export default App;