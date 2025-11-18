import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Book, ArrowLeft, Search, FileText, Code, Zap, Users } from 'lucide-react';
import '../styles/pages.css';

const Documentation = () => {
  const sections = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Getting Started",
      description: "Quick start guide to set up your first experiment",
      topics: ["Create Account", "Dashboard Overview", "First Experiment"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Chatbot Editor",
      description: "Build conversational flows with drag-and-drop interface",
      topics: ["Node Types", "Conditional Logic", "Variables & Data"]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Questionnaires",
      description: "Implement validated research instruments",
      topics: ["SUS Implementation", "AttrakDiff Setup", "Custom Questions"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Participant Management",
      description: "Manage participants and collect data effectively",
      topics: ["Randomization", "Demographics", "Data Export"]
    }
  ];

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
            <Book className="w-8 h-8" />
          </div>
          <h1 className="page-title">Documentation</h1>
          <p className="page-subtitle">
            Comprehensive guides and tutorials for using BotLabX platform
          </p>
          
          {/* Search Bar */}
          <div className="page-search">
            <Search className="page-search-icon" />
            <input 
              type="text" 
              placeholder="Search documentation..."
              className="page-search-input"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="page-content">
        <div className="page-content-wrapper">
          {/* Academic Notice */}
          <div className="page-notice">
            <MessageSquare className="w-5 h-5" />
            <div>
              <strong>Academic Project:</strong> This documentation is part of a research project demonstrating UX research platform development.
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="docs-grid">
            {sections.map((section, i) => (
              <div key={i} className="docs-card">
                <div className="docs-card-icon">
                  {section.icon}
                </div>
                <h3 className="docs-card-title">{section.title}</h3>
                <p className="docs-card-description">{section.description}</p>
                <div className="docs-card-topics">
                  {section.topics.map((topic, j) => (
                    <a key={j} href="#" className="docs-topic-link">
                      {topic}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="page-section">
            <h2 className="page-section-title">Popular Articles</h2>
            <div className="page-list">
              <a href="#" className="page-list-item">
                <FileText className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="page-list-title">How to Create Your First Experiment</div>
                  <div className="page-list-subtitle">Step-by-step guide for beginners</div>
                </div>
              </a>
              <a href="#" className="page-list-item">
                <FileText className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="page-list-title">Understanding SUS Scores</div>
                  <div className="page-list-subtitle">Interpreting usability metrics</div>
                </div>
              </a>
              <a href="#" className="page-list-item">
                <FileText className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="page-list-title">Advanced Chatbot Flows</div>
                  <div className="page-list-subtitle">Conditional logic and branching</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;