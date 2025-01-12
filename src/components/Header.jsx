import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header style={{
      padding: '0.8rem',
      background: 'linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%)',
      color: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderBottom: '3px solid var(--secondary)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <nav>
            <Link to="/" style={{
              color: 'var(--white)',
              marginRight: '1rem',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
            }}>Home</Link>
          </nav>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
