import React from 'react';
import './Display.css';

export default function Display({ head, middle }) {
  return (
    <>
      <></>
      <div className="Head">
        <img src={`/character/${head}-head.png`} alt={`${head}`} />
      </div>
      <div className="Middle">
        <img src={`/character/${middle}-middle.png`} alt={`${middle}`} />
      </div>
    </>
  );
}
