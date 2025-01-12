import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };
  
  const percentage = (score / total) * 100;
  let message = '';
  if (percentage === 100) {
    message = "🌟 Perfect Score! You're a Sustainability Expert!";
  } else if (percentage >= 80) {
    message = "🌿 Great Job! You're a Green Warrior!";
  } else if (percentage >= 60) {
    message = "🌱 Good Effort! Keep Learning!";
  } else {
    message = "🌍 Keep Going! Every Step Counts!";
  }

  return (
    <div className="results-container">
      <h2>{message}</h2>
      <div className="score-display">
        {score} / {total}
      </div>
      <p>You are making the world a better place!</p>
      <button onClick={() => navigate('/')} style={{
        background: 'linear-gradient(45deg, var(--primary) 30%, var(--secondary) 90%)',
      }}>Take Quiz Again</button>
    </div>
  );
};

export default Results;
