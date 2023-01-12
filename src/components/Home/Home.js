import React from 'react';
import { useState } from 'react';
import './Home.css';
import Controls from '../Controls/Controls';
import Display from '../Display/Display.js';

export default function Home() {
  const [head, setHead] = useState('bird');
  return (
    <div className="Home">
      <h1 className="Monoton">Character Designer</h1>
      <div className="body">
        <div className="Controller">
          <Controls head={head} setHead={setHead} />
        </div>
        <div className="Display">
          <Display head={head} />
        </div>
      </div>
    </div>
  );
}
