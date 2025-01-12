import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: "Which of these actions best reduces your carbon footprint?",
    options: [
      "Using plastic straws",
      "Taking public transport",
      "Leaving lights on",
      "Using disposable bags"
    ],
    correct: 1,
    tip: "Using public transport can significantly reduce your carbon emissions!"
  },
  {
    question: "What is the most environmentally friendly way to dispose of electronics?",
    options: [
      "Throw them in the trash",
      "Burn them",
      "Recycle at certified centers",
      "Bury them"
    ],
    correct: 2,
    tip: "Electronics contain harmful materials - always recycle them at certified centers!"
  },
  {
    question: "Which practice helps conserve water?",
    options: [
      "Taking long showers",
      "Running half-full dishwashers",
      "Watering lawn at noon",
      "Installing low-flow faucets"
    ],
    correct: 3,
    tip: "Low-flow fixtures can reduce water usage by 30-50%!"
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (selectedIndex) => {
    const correct = selectedIndex === questions[currentQuestion].correct;
    if (correct) {
      setScore(score + 1);
    }
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowFeedback(false);
    } else {
      navigate('/results', { state: { score, total: questions.length } });
    }
  };

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestion + 1} of {questions.length}</h2>
      <p>{questions[currentQuestion].question}</p>
      
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={showFeedback}
          >
            {option}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
          <p>Tip: {questions[currentQuestion].tip}</p>
          <button onClick={handleNext}>
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
