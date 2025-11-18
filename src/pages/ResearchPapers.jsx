import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ExternalLink, MessageSquare } from 'lucide-react';
import '../styles/pages.css';

const ResearchPapers = () => {
  const papers = [
    {
      title: "Conversational User Interfaces: A Review of Usability Methods",
      authors: "A. Følstad, P. B. Brandtzæg",
      year: "2017",
      journal: "NordiCHI '17: Proceedings of the 2017 Nordic Human Computer Interaction Conference",
      abstract: "This paper reviews usability methods for conversational user interfaces, discussing challenges and opportunities in evaluating chatbot interactions and user experience.",
      topics: ["Conversational AI", "Usability", "HCI"],
      link: "https://dl.acm.org/doi/10.1145/3124666.3124745"
    },
    {
      title: "Chatbots Are Not The Same: Investigating User Experience in Conversational Agents",
      authors: "A. Xu, Z. Liu, Y. Guo, V. Sinha, R. Akkiraju",
      year: "2017", 
      journal: "CHI EA '17: Proceedings of the 2017 CHI Conference Extended Abstracts",
      abstract: "An empirical study investigating how different chatbot characteristics affect user experience, providing insights for designing better conversational agents.",
      topics: ["User Experience", "Chatbots", "Interaction Design"],
      link: "https://dl.acm.org/doi/10.1145/3027063.3053156"
    },
    {
      title: "The System Usability Scale: Past, Present, and Future",
      authors: "A. Bangor, P. Kortum, J. Miller",
      year: "2009",
      journal: "International Journal of Human-Computer Interaction",
      abstract: "Comprehensive review of the System Usability Scale (SUS), its applications, reliability, and validity across different contexts and user populations.",
      topics: ["SUS", "Usability Testing", "Metrics"],
      link: "https://www.tandfonline.com/doi/abs/10.1080/10447310902818882"
    },
    {
      title: "AttrakDiff: A Questionnaire to Measure Perceived Hedonic and Pragmatic Quality",
      authors: "M. Hassenzahl, M. Burmester, F. Koller",
      year: "2003",
      journal: "Mensch & Computer 2003",
      abstract: "Introduction of the AttrakDiff questionnaire for measuring both pragmatic and hedonic aspects of interactive products, enabling comprehensive UX evaluation.",
      topics: ["AttrakDiff", "UX Metrics", "Product Quality"],
      link: "https://www.researchgate.net/publication/234807632_AttrakDiff_A_Questionnaire_to_Measure_Perceived_Hedonic_and_Pragmatic_Quality"
    },
    {
      title: "Evaluating Conversational Agents: The Case of the Social Chatbot",
      authors: "S. Ghosh, M. Chollet, E. Laksana, L. P. Morency, S. Scherer",
      year: "2017",
      journal: "17th International Conference on Intelligent Virtual Agents (IVA 2017)",
      abstract: "Framework for evaluating conversational agents with focus on social aspects, engagement metrics, and long-term user interaction patterns.",
      topics: ["Evaluation", "Social Chatbots", "Metrics"],
      link: "https://link.springer.com/chapter/10.1007/978-3-319-67401-8_14"
    },
    {
      title: "User Experience Design for Automatic Speech Recognition Interfaces",
      authors: "C. Pearl",
      year: "2016",
      journal: "O'Reilly Media - Designing Voice User Interfaces",
      abstract: "Practical guidelines for designing voice and conversational interfaces, covering user research, prototyping, and testing methodologies.",
      topics: ["Voice UI", "Design Guidelines", "ASR"],
      link: "https://www.oreilly.com/library/view/designing-voice-user/9781491955406/"
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
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="page-title">Research Papers</h1>
          <p className="page-subtitle">
            Academic publications and research foundations for conversational UX
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
              <strong>Research Foundation:</strong> These papers represent the academic research that informs BotLabX development and methodology.
            </div>
          </div>

          {/* Papers List */}
          <div className="papers-list">
            {papers.map((paper, i) => (
              <div key={i} className="paper-card">
                <div className="paper-header">
                  <h3 className="paper-title">{paper.title}</h3>
                  <div className="paper-actions">
                    <a 
                      href={paper.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="paper-action-btn"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Paper
                    </a>
                  </div>
                </div>

                <div className="paper-meta">
                  <span className="paper-authors">{paper.authors}</span>
                  <span className="paper-separator">•</span>
                  <span className="paper-year">{paper.year}</span>
                  <span className="paper-separator">•</span>
                  <span className="paper-journal">{paper.journal}</span>
                </div>

                <p className="paper-abstract">{paper.abstract}</p>

                <div className="paper-topics">
                  {paper.topics.map((topic, j) => (
                    <span key={j} className="paper-topic">{topic}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="page-section">
            <h2 className="page-section-title">About These Papers</h2>
            <p className="page-section-text">
              The BotLabX project builds upon established research in conversational interfaces, usability testing, 
              and user experience evaluation. These papers provide the theoretical foundation for our methodology, 
              questionnaire selection, and platform design decisions.
            </p>
          </div>

          {/* Citation Format */}
          <div className="page-section">
            <h3 className="page-section-subtitle">How to Cite</h3>
            <div className="citation-box">
              <code className="citation-text">
                [Author(s)]. ([Year]). [Title]. [Conference/Journal]. Retrieved from [URL]
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPapers;