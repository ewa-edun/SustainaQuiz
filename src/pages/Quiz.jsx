import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  // Energy Conservation
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
    question: "What is the most effective way to reduce home energy consumption?",
    options: [
      "Leaving windows open with AC on",
      "Using incandescent bulbs",
      "Installing proper insulation",
      "Running appliances half-full"
    ],
    correct: 2,
    tip: "Good insulation can reduce energy usage by up to 15%!"
  },
  {
    question: "Which appliance typically uses the most energy in a home?",
    options: [
      "LED lights",
      "Television",
      "Heating/cooling system",
      "Microwave"
    ],
    correct: 2,
    tip: "HVAC systems account for about 40% of home energy use!"
  },

  // Water Conservation
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
  },
  {
    question: "What's the best time to water plants for water conservation?",
    options: [
      "Midnight",
      "Early morning",
      "Noon",
      "Mid-afternoon"
    ],
    correct: 1,
    tip: "Early morning watering reduces evaporation and water waste!"
  },
  {
    question: "Which method best conserves water in gardening?",
    options: [
      "Sprinklers at noon",
      "Daily light watering",
      "Drip irrigation",
      "Flooding once weekly"
    ],
    correct: 2,
    tip: "Drip irrigation can save up to 80% more water than traditional methods!"
  },

  // Waste Management
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
    question: "Which item should NOT go in a recycling bin?",
    options: [
      "Clean cardboard",
      "Aluminum cans",
      "Greasy pizza box",
      "Glass bottles"
    ],
    correct: 2,
    tip: "Food contamination can ruin an entire batch of recyclables!"
  },
  {
    question: "What's the best way to reduce plastic waste?",
    options: [
      "Buying bottled water",
      "Using reusable containers",
      "Getting plastic bags",
      "Single-use items"
    ],
    correct: 1,
    tip: "Reusable containers can prevent hundreds of single-use items from landfills!"
  },

  // Sustainable Living
  {
    question: "Which food choice has the lowest environmental impact?",
    options: [
      "Imported beef",
      "Local vegetables",
      "Processed foods",
      "Farm-raised fish"
    ],
    correct: 1,
    tip: "Local produce reduces transportation emissions and supports local farmers!"
  },
  {
    question: "What's the most eco-friendly transportation for short distances?",
    options: [
      "Electric scooter",
      "Walking",
      "Ride-sharing",
      "Personal car"
    ],
    correct: 1,
    tip: "Walking produces zero emissions and improves your health!"
  },
  {
    question: "Which home improvement best reduces environmental impact?",
    options: [
      "Solar panels",
      "Smart thermostat",
      "New windows",
      "LED lighting"
    ],
    correct: 0,
    tip: "Solar panels can eliminate up to 3-4 tons of carbon emissions annually!"
  },

  // Climate Change
  {
    question: "Which gas contributes most to the greenhouse effect?",
    options: [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Hydrogen"
    ],
    correct: 1,
    tip: "CO2 levels have increased by 48% since pre-industrial times!"
  },
  {
    question: "What's the biggest contributor to ocean pollution?",
    options: [
      "Oil spills",
      "Plastic waste",
      "Sewage",
      "Industrial waste"
    ],
    correct: 1,
    tip: "8 million tons of plastic enter our oceans every year!"
  },
  {
    question: "Which action best helps combat deforestation?",
    options: [
      "Using digital documents",
      "Recycling paper",
      "Planting trees",
      "Using bamboo products"
    ],
    correct: 2,
    tip: "One tree can absorb up to 48 pounds of CO2 per year!"
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
