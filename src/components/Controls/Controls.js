import React from 'react';
import './Controls.css';

export default function Controls({ head, setHead, middle, setMiddle, pants, setPants }) {
  const headHandler = (event) => {
    setHead(event.target.value);
  };
  const middleHandler = (event) => {
    setMiddle(event.target.value);
  };
  const pantsHandler = (event) => {
    setPants(event.target.value);
  };
  return (
    <div className="controller">
      <div className="form-control">
        <select value={head} onChange={headHandler}>
          <option value="bird">Bird</option>
          <option value="dog">Dog</option>
          <option value="duck">Duck</option>
          <option value="horse">Horse</option>
        </select>
      </div>
      <div>
        <select value={middle} onChange={middleHandler}>
          <option value="blue">Blue</option>
          <option value="dress">Dress</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </div>
      <div>
        <select value={pants} onChange={pantsHandler}>
          <option value="blue">Blue</option>
          <option value="dog">Dog</option>
          <option value="leg">Leg</option>
          <option value="white">White</option>
        </select>
      </div>
    </div>
  );
}
