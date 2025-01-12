import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2>Welcome to SustainaQuiz!</h2>
      <p>Test your knowledge about sustainability and learn eco-friendly tips along the way.</p>
      <button 
        onClick={() => navigate('/quiz')}
        className="start-button"
      >
        Take the Quiz
      </button>
    </div>
  );
};

export default Home;
