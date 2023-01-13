import React from 'react';
import './CatchphraseDisplay.css';
export default function CatchphraseDisplay({ catchphrases }) {
  return (
    <div>
      <h3>Catchphrases</h3>
      <ul>
        {catchphrases.map((booger) => {
          return (
            <li className="phrase-list" key={booger}>
              {' '}
              {booger}{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
