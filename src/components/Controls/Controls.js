import React from 'react';
import './Controls.css';

export default function Controls({ head, setHead }) {
  const headHandler = (event) => {
    setHead(event.target.value);
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
    </div>
  );
}
