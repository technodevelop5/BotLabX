import React, { useState } from 'react';
import { GitBranch, PieChart, Users, Target, MessageSquare, Zap, BarChart3, Code, Layers, Shield, TrendingUp, Globe, Award, Star, ArrowRight } from 'lucide-react';
import '../styles/features.css';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const mainFeatures = [
    {
      icon: <GitBranch className="w-7 h-7" />,
      title: "Visual Flow Builder",
      description: "Drag-and-drop conversation design with conditional logic, branching, and real-time preview. Build complex conversational experiences without code.",
      stats: { nodes: "50+", integrations: "20+" }
    },
    {
      icon: <PieChart className="w-7 h-7" />,
      title: "Live Analytics Engine",
      description: "Track SUS, CUQ, AttrakDiff scores in real-time. AI-powered insights, heatmaps, and automated report generation with CSV/PDF export.",
      stats: { metrics: "15+", exports: "Unlimited" }
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Smart Participant Hub",
      description: "Automated randomization, demographic filtering, anonymous tracking, and multi-language support. GDPR-compliant by design.",
      stats: { languages: "40+", compliance: "100%" }
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Create Experiment",
      description: "Set up your study parameters, select questionnaires (SUS, CUQ, AttrakDiff), and configure participant criteria in minutes.",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Design Chatbot",
      description: "Use our visual editor to build conversation flows with drag-and-drop nodes, conditional logic, and custom themes.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Deploy & Collect",
      description: "Launch your experiment with a single click. Participants interact via chat and complete standardized surveys automatically.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Analyze Results",
      description: "View real-time dashboards, segment by demographics, export data, and generate professional research reports instantly.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const capabilities = [
    { 
      icon: <Code />, 
      title: "No-Code Editor", 
      desc: "Visual chatbot builder with 50+ pre-built templates and AI suggestions",
      color: "blue"
    },
    { 
      icon: <Layers />, 
      title: "Multi-Method Research", 
      desc: "Combine conversational AI with validated questionnaires seamlessly",
      color: "purple"
    },
    { 
      icon: <Shield />, 
      title: "Enterprise Security", 
      desc: "SOC 2 Type II, GDPR compliant with end-to-end encryption",
      color: "green"
    },
    { 
      icon: <TrendingUp />, 
      title: "Real-Time Insights", 
      desc: "Live participant tracking with AI-powered analysis and recommendations",
      color: "orange"
    },
    { 
      icon: <Globe />, 
      title: "Global Reach", 
      desc: "40+ languages with localized questionnaires and timezone support",
      color: "cyan"
    },
    { 
      icon: <Award />, 
      title: "Validated Metrics", 
      desc: "Industry-standard instruments: SUS, CUQ, AttrakDiff, NASA-TLX",
      color: "pink"
    }
  ];

  const stats = [
    { value: "25k+", label: "Active Users", sublabel: "Global researchers" },
    { value: "1.2M+", label: "Conversations", sublabel: "Analyzed monthly" },
    { value: "99.9%", label: "Uptime", sublabel: "Last 12 months" },
    { value: "4.9/5", label: "Rating", sublabel: "From 2,000+ reviews" }
  ];

  const testimonials = [
    { 
      name: "Dr. Elena Martinez", 
      role: "Lead UX Researcher", 
      company: "TechCorp Innovation Lab",
      text: "BotLabX transformed our study velocity. We're running 3x more experiments with better data quality. The chatbot editor is intuitive yet powerful.",
      rating: 5,
      avatar: "E"
    },
    { 
      name: "James Chen", 
      role: "Product Research Manager", 
      company: "FinanceAI Solutions",
      text: "The combination of conversational testing and validated metrics is genius. Our team reduced setup time by 80% while improving participant engagement.",
      rating: 5,
      avatar: "J"
    },
    { 
      name: "Sarah Thompson", 
      role: "Director of Research", 
      company: "GlobalDesign Agency",
      text: "Best investment we've made. The analytics dashboard alone is worth it. Real-time SUS scores and automated reports have changed how we work with clients.",
      rating: 5,
      avatar: "S"
    }
  ];

  const integrations = [
    "Figma", "Slack", "Notion", "Jira", "Google Analytics", "Zapier", "Airtable", "Miro"
  ];

  return (
    <>
      {/* Stats Bar */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sublabel">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section id="features" className="features-section">
        <div className="features-container">
          <div className="features-header">
            <div className="features-badge">POWERFUL FEATURES</div>
            <h2 className="features-title">
              Everything You Need.<br />
              <span className="features-title-gradient">Nothing You Don't.</span>
            </h2>
            <p className="features-subtitle">
              Professional-grade tools designed for UX researchers who demand both power and simplicity
            </p>
          </div>

          <div className="features-grid">
            {mainFeatures.map((feature, i) => (
              <div 
                key={i}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="feature-card"
              >
                <div className="feature-card-arrow">
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-stats">
                  {Object.entries(feature.stats).map(([key, value], idx) => (
                    <div key={idx} className="feature-stat">
                      <div className="feature-stat-value">{value}</div>
                      <div className="feature-stat-label">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow-section">
        <div className="workflow-container">
          <div className="workflow-header">
            <div className="workflow-badge">HOW IT WORKS</div>
            <h2 className="workflow-title">
              From Idea to Insights<br />
              <span className="workflow-title-gradient">In Four Simple Steps</span>
            </h2>
          </div>

          <div className="workflow-grid">
            {workflowSteps.map((step, i) => (
              <div key={i} className="workflow-step">
                {i < workflowSteps.length - 1 && (
                  <div className="workflow-connector"></div>
                )}
                <div className="workflow-card">
                  <div className="workflow-icon">
                    {step.icon}
                  </div>
                  <div className="workflow-step-number">{step.step}</div>
                  <h3 className="workflow-step-title">{step.title}</h3>
                  <p className="workflow-step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="capabilities-section">
        <div className="capabilities-container">
          <div className="capabilities-header">
            <div className="capabilities-badge">ENTERPRISE READY</div>
            <h2 className="capabilities-title">
              Built for Scale.<br />
              <span className="capabilities-title-gradient">Designed for Teams.</span>
            </h2>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((cap, i) => (
              <div key={i} className={`capability-card capability-card-${cap.color}`}>
                <div className={`capability-icon capability-icon-${cap.color}`}>
                  {React.cloneElement(cap.icon, { className: "w-6 h-6" })}
                </div>
                <h4 className="capability-title">{cap.title}</h4>
                <p className="capability-description">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="integrations-section">
        <div className="integrations-container">
          <h2 className="integrations-title">
            Seamless Integration with Your Stack
          </h2>
          <p className="integrations-subtitle">
            Connect with the tools you already use every day
          </p>
          <div className="integrations-grid">
            {integrations.map((tool, i) => (
              <div key={i} className="integration-card">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <div className="testimonials-badge">⭐ LOVED BY RESEARCHERS</div>
            <h2 className="testimonials-title">
              Don't Just Take Our Word
            </h2>
            <p className="testimonials-subtitle">
              See what leading UX professionals say about BotLabX
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="testimonial-star" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                    <div className="testimonial-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="cta-bg">
          <div className="cta-bg-blob cta-bg-blob-1"></div>
          <div className="cta-bg-blob cta-bg-blob-2"></div>
        </div>
        <div className="cta-container">
          <h2 className="cta-title">
            Ready to Transform<br />Your UX Research?
          </h2>
          <p className="cta-subtitle">
            Join 25,000+ researchers already conducting world-class studies with BotLabX
          </p>
          <div className="cta-buttons">
            <button className="cta-btn-primary">
              Start Free Trial
              <ArrowRight className="w-5 h-5 cta-btn-arrow" />
            </button>
            <button className="cta-btn-secondary">
              Schedule Demo
            </button>
          </div>
          <p className="cta-note">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
};

export default Features;