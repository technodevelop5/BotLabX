// ResearchTeam.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight,ArrowLeft, Users, Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

import '../styles/pages.css';

export const ResearchTeam = () => {
  const team = [
    { name: "Aneesh Kapoor", role: "Web Developer", avatar: "AK", email: "technodevelop5@gmail.com" },
    { name: "Marat Kabirov", role: "FullStack Developer", avatar: "MK", email: "technodevelop5@gmail.com" },
    { name: "Itixa Talaviya", role: "AI Developer", avatar: "IT", email: "technodevelop5@gmail.com" },
    { name: "Ahmad", role: "UX/UI Designer", avatar: "A", email: "technodevelop5@gmail.com" },
    { name: "Shehla Ahmed", role: "Project Manager", avatar: "SA", email: "technodevelop5@gmail.com" }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-content">
          <Link to="/" className="page-back-link">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="page-icon"><Users className="w-8 h-8" /></div>
          <h1 className="page-title">Research Team</h1>
          <p className="page-subtitle">Meet the team behind the BotLabX project</p>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-wrapper">
          <div className="page-notice">
            <MessageSquare className="w-5 h-5" />
            <div><strong>Academic Team:</strong> This is a demonstration team structure for the college project.</div>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-avatar">{member.avatar}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-contact">
                  <a href={`mailto:${member.email}`} className="team-link"><Mail className="w-4 h-4" /></a>
                  <a href="#" className="team-link"><Linkedin className="w-4 h-4" /></a>
                  <a href="#" className="team-link"><Github className="w-4 h-4" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog.jsx
export const Blog = () => {
  const posts = [
    { title: "Introduction to Conversational UX Research", date: "November 15, 2024", excerpt: "Exploring how conversational interfaces are transforming user research methodologies and improving data collection quality." },
    { title: "Understanding SUS Scores in Practice", date: "November 10, 2024", excerpt: "A deep dive into System Usability Scale implementation, interpretation, and best practices for meaningful results." },
    { title: "Building Effective Chatbot Flows", date: "November 5, 2024", excerpt: "Design principles and strategies for creating engaging conversational experiences in research contexts." }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-content">
          <Link to="/" className="page-back-link">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="page-icon"><MessageSquare className="w-8 h-8" /></div>
          <h1 className="page-title">Research Blog</h1>
          <p className="page-subtitle">Insights and findings from our research journey</p>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-wrapper">
          <div className="blog-list">
            {posts.map((post, i) => (
              <article key={i} className="blog-card">
                <div className="blog-date">{post.date}</div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-read-more">Read More →</a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Publications.jsx
export const Publications = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-content">
          <Link to="/" className="page-back-link">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="page-icon"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg></div>
          <h1 className="page-title">Publications</h1>
          <p className="page-subtitle">Academic contributions and conference presentations</p>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-wrapper">
          <div className="page-notice">
            <MessageSquare className="w-5 h-5" />
            <div><strong>Academic Publications:</strong> Demonstration publications for the research project showcase.</div>
          </div>
          <div className="page-section">
            <h2 className="page-section-title">Conference Presentations</h2>
            <div className="publication-item">
              <h3 className="publication-title">"BotLabX: A Platform for Conversational UX Research"</h3>
              <p className="publication-venue">Academic Conference on HCI - 2024</p>
            </div>
          </div>
          <div className="page-section">
            <h2 className="page-section-title">Project Reports</h2>
            <div className="publication-item">
              <h3 className="publication-title">"Implementing Validated Instruments in Digital Environments"</h3>
              <p className="publication-venue">College Research Symposium - 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact.jsx
export const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-content">
          <Link to="/" className="page-back-link">
            <ArrowRight className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="page-icon"><Mail className="w-8 h-8" /></div>
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch with the TechnoDevelop team</p>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-wrapper">
          <div className="contact-grid">
            <div className="contact-card">
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="contact-card-title">Project Email</h3>
              <a href="mailto:technodevelop5@gmail.com" className="contact-card-text">
                technodevelop5@gmail.com
              </a>
            </div>
            <div className="contact-card">
              <Users className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="contact-card-title">Supervisor</h3>
              <a href="mailto:verena.traubinger@informatik.tu-chemnitz.de" className="contact-card-text">
                verena.traubinger@informatik.tu-chemnitz.de
              </a>
            </div>
            <div className="contact-card">
              <MessageSquare className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="contact-card-title">University</h3>
              <p className="contact-card-text">Technical University of Chemnitz</p>
            </div>
          </div>
          <div className="page-section">
            <h2 className="page-section-title">Project Information</h2>
            <p className="page-section-text">
              BotLabX is an academic project developed by Team TechnoDevelop at Technical University of Chemnitz. 
              For inquiries about the project, collaboration opportunities, or technical questions, please reach out via email above.
            </p>
            <div className="contact-address">
              <h3 className="page-section-subtitle">Location</h3>
              <p className="page-section-text">
                Str. der Nationen 62<br />
                09111 Chemnitz<br />
                Germany
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Imprint.jsx
export const Imprint = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-content">
          <Link to="/" className="page-back-link">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="page-icon">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="page-title">Imprint (Impressum)</h1>
          <p className="page-subtitle">Academic project information and legal details</p>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-wrapper">
          <div className="imprint-academic-notice">
            <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <p className="imprint-academic-text">
              BotLabX is part of an academic project by <strong>TechnoDevelop</strong> at TU Chemnitz and is for <strong>demonstration purposes only</strong>.
            </p>
          </div>

          <div className="imprint-content-compact">
            <section className="imprint-section-compact">
              <h3 className="imprint-section-title-compact">Project Information</h3>
              <div className="imprint-info-grid">
                <div className="imprint-info-item">
                  <span className="imprint-label">Team Name:</span>
                  <span className="imprint-value">TechnoDevelop</span>
                </div>
                <div className="imprint-info-item">
                  <span className="imprint-label">Project Title:</span>
                  <span className="imprint-value">Chatbot Design for Hotel Booking User Experience</span>
                </div>
                <div className="imprint-info-item">
                  <span className="imprint-label">University:</span>
                  <span className="imprint-value">Technical University of Chemnitz</span>
                </div>
                <div className="imprint-info-item">
                  <span className="imprint-label">Faculty & Supervision:</span>
                  <span className="imprint-value">Verena Traubinger, M.Sc.</span>
                </div>
                <div className="imprint-info-item">
                  <span className="imprint-label">Course:</span>
                  <span className="imprint-value">Planspiel / Project Seminar – Master in Web Engineering</span>
                </div>
                <div className="imprint-info-item">
                  <span className="imprint-label">Contact Email:</span>
                  <span className="imprint-value">
                    <a href="mailto:verena.traubinger@informatik.tu-chemnitz.de" className="imprint-email">
                      verena.traubinger@informatik.tu-chemnitz.de
                    </a>
                  </span>
                </div>
                <div className="imprint-info-item">
                  <span className="imprint-label">Location:</span>
                  <span className="imprint-value">Str. der Nationen 62, 09111 Chemnitz, Germany</span>
                </div>
              </div>
            </section>

            <section className="imprint-section-compact">
              <h3 className="imprint-section-title-compact">Academic Disclaimer</h3>
              <div className="imprint-disclaimer-box">
                <p>
                  This is an <strong>academic project</strong>, not a real commercial website. BotLabX is developed for educational 
                  and demonstration purposes as part of a Master's degree program at Technical University of Chemnitz.
                </p>
                <p className="mt-2">
                  All experiment data, case studies, and user interactions are for demonstration only. No real user data is collected 
                  or stored for commercial purposes.
                </p>
              </div>
            </section>

            <section className="imprint-section-compact">
              <h3 className="imprint-section-title-compact">Copyright Notice</h3>
              <p className="imprint-text-compact">
                © 2025 TechnoDevelop - TU Chemnitz. This project is created for educational purposes under academic supervision.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};