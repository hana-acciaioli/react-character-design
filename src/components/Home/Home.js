import React from 'react';
import { useState } from 'react';
import './Home.css';
import Controls from '../Controls/Controls';
import Display from '../Display/Display.js';
import CatchphraseDisplay from '../CatchphraseDisplay/CatchphraseDisplay.js';
import Scoreboard from '../Scoreboard/Scoreboard';
export default function Home() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [pants, setPants] = useState('blue');
  const [catchphrases, setCatchphrases] = useState([]);
  const [countHead, setCountHead] = useState(0);
  const [countMiddle, setCountMiddle] = useState(0);
  const [countPants, setCountPants] = useState(0);

  return (
    <div className="Home">
      <h1 className="Monoton">Character Designer</h1>
      <div className="body">
        <div className="Controller">
          <Controls
            head={head}
            setHead={setHead}
            middle={middle}
            setMiddle={setMiddle}
            pants={pants}
            setPants={setPants}
            setCatchphrases={setCatchphrases}
            setCountHead={setCountHead}
            setCountMiddle={setCountMiddle}
            setCountPants={setCountPants}
          />
        </div>
        <div className="Display">
          <Display head={head} middle={middle} pants={pants} catchphrases={catchphrases} />
        </div>
        <div>
          <CatchphraseDisplay catchphrases={catchphrases} />
        </div>
        <Scoreboard countHead={countHead} countMiddle={countMiddle} countPants={countPants} />
      </div>
    </div>
  );
}
