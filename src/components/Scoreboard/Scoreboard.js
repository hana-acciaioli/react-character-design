import React from 'react';
import './Scoreboard.css';

export default function Scoreboard({ countHead, countMiddle, countPants }) {
  return (
    <div className="Scoreboard">
      You have changed the character head {countHead} times, the middle {countMiddle} times, and the
      pants {countPants} times. Pick an outfit already, why dontcha.{' '}
    </div>
  );
}
