import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Mail, MessageCircle, Book, MessageSquare, Send } from 'lucide-react';
import '../styles/pages.css';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqs = [
    {
      question: "How do I create my first experiment?",
      answer: "Navigate to the Dashboard and click 'New Experiment'. Follow the step-by-step wizard to configure your study settings, select questionnaires, and design your chatbot flow."
    },
    {
      question: "Which questionnaire should I use?",
      answer: "It depends on your research goals. Use SUS for general usability, AttrakDiff for hedonic quality assessment, and CUQ for comprehensive user satisfaction evaluation."
    },
    {
      question: "How many participants do I need?",
      answer: "For quantitative usability testing, aim for 20-30 participants minimum. For exploratory research, 5-10 participants may be sufficient for initial insights."
    },
    {
      question: "Can I export my research data?",
      answer: "Yes! All experiment data can be exported in CSV or PDF format from the Results page. You have full access to raw data and aggregated analytics."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support form submitted:', formData);
    alert('Thank you for your message! This is a demo submission for the academic project.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="page-title">Support Center</h1>
          <p className="page-subtitle">
            Get help with BotLabX platform and research methodologies
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="page-content">
        <div className="page-content-wrapper">
          {/* Academic Notice */}
          <div className="page-notice">
            <MessageSquare className="w-5 h-5" />
            <div>
              <strong>Demo Support:</strong> This is a demonstration support page for the academic project. Submissions are for display purposes only.
            </div>
          </div>

          <div className="support-layout">
            {/* Left Column - Contact Form */}
            <div className="support-main">
              <div className="support-section">
                <h2 className="support-section-title">Contact Us</h2>
                <p className="support-section-text">
                  Have a question? Send us a message and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="support-form">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      rows="6"
                      placeholder="Describe your question or issue..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="support-submit-btn">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* FAQ Section */}
              <div className="support-section">
                <h2 className="support-section-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                  {faqs.map((faq, i) => (
                    <div key={i} className="faq-item">
                      <h4 className="faq-question">{faq.question}</h4>
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Quick Links */}
            <div className="support-sidebar">
              <div className="support-card">
                <Book className="w-6 h-6 text-blue-600" />
                <h3 className="support-card-title">Documentation</h3>
                <p className="support-card-text">
                  Browse our comprehensive guides and tutorials
                </p>
                <Link to="/documentation" className="support-card-link">
                  View Docs →
                </Link>
              </div>

              <div className="support-card">
                <MessageCircle className="w-6 h-6 text-purple-600" />
                <h3 className="support-card-title">Community</h3>
                <p className="support-card-text">
                  Join discussions with other researchers
                </p>
                <a href="#" className="support-card-link">
                  Join Forum →
                </a>
              </div>

              <div className="support-card">
                <Mail className="w-6 h-6 text-green-600" />
                <h3 className="support-card-title">Email Support</h3>
                <p className="support-card-text">
                  Reach out directly to our team
                </p>
                <a href="mailto:technodevelop5@gmail.com" className="support-card-link">
                  technodevelop5@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;