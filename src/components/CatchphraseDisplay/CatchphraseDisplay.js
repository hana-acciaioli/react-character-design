import React from 'react';
import './CatchphraseDisplay.css';
export default function CatchphraseDisplay({ catchphrases }) {
  return (
    <div className="phrase-list">
      <h3>Catchphrases</h3>
      <ul>
        {catchphrases.map((booger) => {
          return <li key={booger}> {booger} </li>;
        })}
      </ul>
    </div>
  );
}
