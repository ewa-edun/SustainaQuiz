import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={{ marginBottom: '10px' }}>Connect with me:</p>
      <div style={iconContainerStyle}>
        <a href="https://www.linkedin.com/in/oluwadamilola-edun/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
        </a>
        <a href="https://www.youtube.com/@ewa_edun" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} style={iconStyle} />
        </a>
        <a href="https://github.com/ewa-edun" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={iconStyle} />
        </a>
        <a href="https://discord.gg/jSyr2dkP" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} style={iconStyle} />
        </a>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'var(--primary)',
  color: 'var(--white)',
  textAlign: 'center',
  padding: '15px 0',
  marginTop: 'auto',
};

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
};

const iconStyle = {
  fontSize: '24px',
  color: 'var(--secondary)',
  transition: 'color 0.3s',
  '&:hover': {
    color: 'var(--secondary-dark)'
  }
};

export default Footer;
