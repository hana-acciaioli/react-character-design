import React from 'react';
import './Scoreboard.css';

export default function Scoreboard({ countHead, countMiddle, countPants }) {
  return (
    <div className="Scoreboard">
      You have changed the character&apos;s head <b>{countHead}</b> times, the middle{' '}
      <b>{countMiddle}</b> times, and the pants <b>{countPants}</b> times.
    </div>
  );
}
