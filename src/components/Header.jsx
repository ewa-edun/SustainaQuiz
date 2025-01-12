import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      padding: '0.8rem',
      background: 'linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%)',
      color: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderBottom: '3px solid var(--secondary)',
    }}>
      <h1 style={{
        margin: '0',
        fontSize: '2rem',
        color: 'var(--secondary)',
        fontWeight: 'bold',
        '@media (min-width: 768px)': {
          fontSize: '2.5rem',
        }
      }}>🌍 SustainaQuiz</h1>
      <nav>
        <Link to="/" style={{
          color: 'var(--white)',
          marginRight: '1rem',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
        }}>Home</Link>
      </nav>
    </header>
  );
};

export default Header;
