import React from 'react';
import './Controls.css';
import { useState } from 'react';

export default function Controls({
  head,
  setHead,
  middle,
  setMiddle,
  pants,
  setPants,
  setCatchphrases,
}) {
  const [inputValue, setInputValue] = useState('');

  const headHandler = (event) => {
    setHead(event.target.value);
  };
  const middleHandler = (event) => {
    setMiddle(event.target.value);
  };
  const pantsHandler = (event) => {
    setPants(event.target.value);
  };
  // const catchphraseInputHandler = (event) => {
  //   setInputValue(event.target.value);
  // };

  const addCatchphraseHandler = () => {
    setCatchphrases((currentState) => [...currentState, inputValue]);
    setInputValue('');
  };
  return (
    <div className="controller">
      <h3 className="header"> Create your character</h3>
      <div className="form-control">
        <label>Head: </label>
        <select value={head} onChange={headHandler}>
          <option value="bird">Bird</option>
          <option value="dog">Dog</option>
          <option value="duck">Duck</option>
          <option value="horse">Horse</option>
        </select>
      </div>
      <div className="form-control">
        <label>Middle: </label>
        <select value={middle} onChange={middleHandler}>
          <option value="blue">Blue</option>
          <option value="dress">Dress</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </div>
      <div className="form-control">
        <label>Pants :</label>
        <select value={pants} onChange={pantsHandler}>
          <option value="blue">Blue</option>
          <option value="dog">Dog</option>
          <option value="leg">Leg</option>
          <option value="white">White</option>
        </select>
      </div>

      <div className="form-control">
        <label>Make a catchphrase: </label>
        <input
          value={inputValue}
          style={{ height: '150px' }}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addCatchphraseHandler}>Add</button>
      </div>
    </div>
  );
}
