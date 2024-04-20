import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icons } from '../../components/Icons';
import profile from '../../Images/profile.jpg'

const Footer = () => {
  return (
    <footer className='section-bg'>
      <div className="footer-details">
        <div className="details">
          <div className="footer-right">
            <h1>Reach Out to me!</h1>
            <h2>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</h2>
            <p>Full Stack Web Developer</p>
            <div className="footer-btn">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>Moga, Punjab
              </button>
            </div>
            <div className="social-links">
              {Icons.map((icon) => (
                <div className="social-link social-link-animation" style={{ backgroundColor: icon.BGcolor, border: icon }} key={icon.name}>
                  <a style={{ color: '#fff' }} href={icon.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon.icon} title={icon.name} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-left">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
