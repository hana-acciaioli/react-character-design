import React from 'react';
import './Display.css';

export default function Display({ head }) {
  return (
    <div className="Head">
      <img src={`/character/${head}-head.png`} alt={`${head}`} />
    </div>
  );
}
