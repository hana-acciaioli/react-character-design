import React from 'react';
import Home from './components/Home/Home';
import './App.css';
import background from './background.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `URL(${background})` }}>
      <div />
      <Home />
      <div />
    </div>
  );
}

export default App;
