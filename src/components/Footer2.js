import React from 'react';
import SocialLinks from './SocialLinks';
import '../assets/sass/_footer2.scss';

export default function Footer() {
  return (
    <footer className="bg-black text-white-50">
      <div className="footer-layout">
        <div className="footer-left"></div>

        <div className="footer-social">
          <SocialLinks />
        </div>

        <span className="footer-text">
          &copy; 2026 | hello@jalensmith.org
        </span>
      </div>
    </footer>
  );
}