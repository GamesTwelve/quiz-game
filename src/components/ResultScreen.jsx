import React from 'react';

export default function ResultScreen({ result, correctText, onTryAgain }) {
  const isCorrect = result === 'correct';
  return (
    <section className="result-screen" aria-live="polite">
      <div className={`result-card ${isCorrect ? 'ok' : 'bad'}`}>
        <h2>{isCorrect ? 'Correct!' : 'Incorrect'}</h2>
        <p>
          {isCorrect
            ? 'Nice job — that was the right picture.'
            : `The correct picture was: ${correctText}`}
        </p>

        <button className="primary" onClick={onTryAgain}>
          Try Again
        </button>
      </div>
    </section>
  );
}
