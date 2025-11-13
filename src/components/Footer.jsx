import React from 'react';
import { MessageSquare } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-title">BotLabX</span>
                <span className="footer-logo-subtitle">AI-Powered UX Platform</span>
              </div>
            </div>
            <p className="footer-description">
              The world's most advanced conversational UX research platform. Build chatbots, deploy surveys, analyze results—all in one place.
            </p>
            <div className="footer-social">
              {['T', 'L', 'G'].map((social, i) => (
                <a key={i} href="#" className="footer-social-link">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Platform Column */}
          <div className="footer-column">
            <h5 className="footer-column-title">Platform</h5>
            <ul className="footer-links">
              <li><a href="#dashboard" className="footer-link">Dashboard</a></li>
              <li><a href="#experiments" className="footer-link">Experiments</a></li>
              <li><a href="#chatbot-editor" className="footer-link">Chatbot Editor</a></li>
              <li><a href="#results" className="footer-link">Results</a></li>
              <li><a href="#settings" className="footer-link">Settings</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-column">
            <h5 className="footer-column-title">Resources</h5>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Documentation</a></li>
              <li><a href="#" className="footer-link">API Reference</a></li>
              <li><a href="#" className="footer-link">Templates</a></li>
              <li><a href="#" className="footer-link">Case Studies</a></li>
              <li><a href="#" className="footer-link">Support</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h5 className="footer-column-title">Company</h5>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Press Kit</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 BotLabX, Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
            <a href="#" className="footer-legal-link">Cookie Policy</a>
            <a href="#" className="footer-legal-link">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;