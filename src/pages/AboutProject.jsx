import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Target, Lightbulb, Award, MessageSquare } from 'lucide-react';
import '../styles/pages.css';

const AboutProject = () => {
  return (
    <div className="page-container">
      {/* Header */}
      <div className="page-header">
        <div className="page-header-content">
          <Link to="/" className="page-back-link">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="page-icon">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h1 className="page-title">About the Project</h1>
          <p className="page-subtitle">
            An academic exploration of conversational UX research methodologies
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="page-content">
        <div className="page-content-wrapper">
          {/* Academic Notice */}
          <div className="page-notice page-notice-accent">
            <MessageSquare className="w-5 h-5" />
            <div>
              <strong>College Research Project:</strong> BotLabX is developed as an academic project to demonstrate advanced UX research platform development and implementation.
            </div>
          </div>

          {/* Main Content */}
          <div className="about-content">
            <section className="about-section">
              <h2 className="about-section-title">Project Overview</h2>
              <p className="about-section-text">
                BotLabX is a comprehensive conversational UX research platform developed as part of a college 
                research initiative. This project explores the intersection of conversational AI, user experience 
                research, and validated psychometric instruments to create an innovative approach to understanding 
                user behavior and preferences.
              </p>
              <p className="about-section-text">
                The platform demonstrates how modern web technologies, AI-powered chatbots, and established research 
                methodologies can be combined to create accessible, scalable, and effective user research tools.
              </p>
            </section>

            {/* Key Features Grid */}
            <div className="about-features">
              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="about-feature-title">Research Objectives</h3>
                <p className="about-feature-text">
                  Investigate how conversational interfaces can improve participant engagement, data quality, 
                  and research efficiency compared to traditional survey methods.
                </p>
              </div>

              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="about-feature-title">Innovation</h3>
                <p className="about-feature-text">
                  Integrate validated instruments (SUS, AttrakDiff, CUQ) with conversational AI to create 
                  a more engaging and intuitive research experience.
                </p>
              </div>

              <div className="about-feature-card">
                <div className="about-feature-icon">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="about-feature-title">Academic Value</h3>
                <p className="about-feature-text">
                  Contribute to the academic understanding of digital research tools, real-time analytics, 
                  and user-centered design principles in practice.
                </p>
              </div>
            </div>

            <section className="about-section">
              <h2 className="about-section-title">Technology Stack</h2>
              <p className="about-section-text">
                Built with modern web technologies including React, Node.js, and advanced UI/UX design principles. 
                The platform showcases full-stack development capabilities, responsive design, and scalable architecture.
              </p>
              <div className="tech-stack">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">REST API</span>
                <span className="tech-badge">Real-time Analytics</span>
                <span className="tech-badge">Responsive Design</span>
                <span className="tech-badge">Conversational AI</span>
              </div>
            </section>

            <section className="about-section">
              <h2 className="about-section-title">Research Methodology</h2>
              <p className="about-section-text">
                This project employs established UX research methodologies including:
              </p>
              <ul className="about-list">
                <li>System Usability Scale (SUS) for standardized usability measurement</li>
                <li>AttrakDiff for evaluating hedonic and pragmatic product qualities</li>
                <li>Computer Usability Questionnaire (CUQ) for comprehensive satisfaction assessment</li>
                <li>Real-time data collection and analysis techniques</li>
                <li>Participant randomization and demographic segmentation</li>
              </ul>
            </section>

            <section className="about-section">
              <h2 className="about-section-title">Academic Disclaimer</h2>
              <p className="about-section-text">
                BotLabX is created solely for educational and demonstration purposes as part of a college research 
                project. It is not a commercial product and is not intended for production use. All data, case studies, 
                and examples presented are fictional and created for academic illustration.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;