import React from 'react';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Home from './components/Home/Home';
import './App.css';
import background from './background.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `URL(${background})` }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
