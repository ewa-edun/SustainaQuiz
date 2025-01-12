import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { currentTheme, toggleTheme } = useTheme();

  const themeOptions = [
    { name: 'light', icon: '☀️' },
    { name: 'dark', icon: '🌙' },
    { name: 'forest', icon: '🌲' },
    { name: 'ocean', icon: '🌊' }
  ];

  return (
    <div style={styles.container}>
      {themeOptions.map((theme) => (
        <button
          key={theme.name}
          onClick={() => toggleTheme(theme.name)}
          style={{
            ...styles.themeButton,
            backgroundColor: currentTheme === theme.name ? 'var(--secondary)' : 'transparent',
            color: currentTheme === theme.name ? 'var(--primary-dark)' : 'var(--white)'
          }}
          aria-label={`Switch to ${theme.name} theme`}
        >
          {theme.icon}
        </button>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  },
  themeButton: {
    padding: '0.5rem',
    border: '2px solid var(--secondary)',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '1.2rem',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  }
};

export default ThemeSwitcher;
