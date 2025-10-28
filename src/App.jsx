import React, { useState } from 'react';
import ImageQuestion from './components/ImageQuestion';
import ResultScreen from './components/ResultScreen';
import QUESTIONS from './data/questions';

export default function App() {
  // for this example we show the first question only
  const question = QUESTIONS[0];

  // states: null = unanswered, 'correct' or 'incorrect'
  const [result, setResult] = useState(null);

  function handleAnswer(selectedIndex) {
    if (selectedIndex === question.correctIndex) {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  }

  function reset() {
    setResult(null);
  }

  return (
    <div className="app-container">
      <header>
        <h1>Picture Quiz</h1>
      </header>

      <main>
        {result === null ? (
          <ImageQuestion question={question} onAnswer={handleAnswer} />
        ) : (
          <ResultScreen
            result={result}
            correctText={question.choices[question.correctIndex].title}
            onTryAgain={reset}
          />
        )}
      </main>

      <footer>
        <small>Built with Vite + React</small>
      </footer>
    </div>
  );
}
