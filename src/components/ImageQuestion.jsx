import React, { useState } from 'react';

export default function ImageQuestion({ question, onAnswer }) {
  const [disabled, setDisabled] = useState(false);

  function handleSelect(i) {
    if (disabled) return;
    setDisabled(true);
    // small delay so user sees click effect before switching screen
    setTimeout(() => onAnswer(i), 200);
  }

  return (
    <section className="question-screen">
      <h2 className="question-text">{question.text}</h2>

      <div className="options-grid" role="list">
        {question.choices.map((choice, i) => (
          <button
            key={i}
            role="listitem"
            className="option-card"
            onClick={() => handleSelect(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSelect(i);
              }
            }}
            disabled={disabled}
            aria-label={`Option ${i + 1}: ${choice.title}`}
          >
            <div className="option-image-wrap">
              {/* use /images/ path (public/images) */}
              <img
                src={choice.image}
                alt={choice.title}
                className="option-image"
                draggable="false"
              />
            </div>
            <div className="option-title">{choice.title}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
