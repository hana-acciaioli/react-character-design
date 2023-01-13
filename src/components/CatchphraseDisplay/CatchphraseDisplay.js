import React from 'react';
import './CatchphraseDisplay.css';
export default function CatchphraseDisplay({ catchphrases }) {
  return (
    <div>
      <h3>Catchphrases</h3>
      <ul>
        {catchphrases.map((value, index) => {
          return (
            <li className="phrase-list" key={index}>
              {' '}
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
