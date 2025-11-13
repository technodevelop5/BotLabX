import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle, ArrowRight, Play, MessageSquare, ChevronRight, TrendingUp, Users } from 'lucide-react';
import '../styles/hero.css';

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-bg-blob hero-bg-blob-1"></div>
        <div className="hero-bg-blob hero-bg-blob-2"></div>
        <div className="hero-bg-blob hero-bg-blob-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="hero-badge-text">
              Trusted by 25,000+ Researchers Worldwide
            </span>
            <div className="hero-badge-avatars">
              <div className="hero-avatar hero-avatar-1"></div>
              <div className="hero-avatar hero-avatar-2"></div>
              <div className="hero-avatar hero-avatar-3"></div>
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="hero-title">
            <span className="hero-title-main">Build. Test.</span>
            <span className="hero-title-gradient">Understand.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-subtitle">
            The world's most advanced <span className="hero-subtitle-bold">conversational UX research platform</span>. 
            Design chatbots, deploy validated surveys, and analyze results—all in one place.
          </p>
          
          {/* CTA Buttons */}
          <div className="hero-cta">
            <button className="hero-btn-primary">
              <span className="hero-btn-primary-content">
                Start Free 14-Day Trial
                <ArrowRight className="w-5 h-5 hero-btn-arrow" />
              </span>
              <div className="hero-btn-primary-overlay"></div>
            </button>
            <button className="hero-btn-secondary">
              <Play className="w-5 h-5" />
              Watch 2-Min Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust">
            <div className="hero-trust-item">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>No credit card required</span>
            </div>
            <div className="hero-trust-item">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="hero-trust-item">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Interactive Product Preview */}
        <div className="hero-preview">
          <div className="hero-preview-glow"></div>
          <div className="hero-preview-container">
            {/* Tabs */}
            <div className="hero-tabs">
              {['Chatbot Editor', 'Live Analytics', 'Participant View'].map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`hero-tab ${activeTab === i ? 'hero-tab-active' : ''}`}
                >
                  {tab}
                  {activeTab === i && <div className="hero-tab-indicator"></div>}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="hero-tab-content">
              {activeTab === 0 && (
                <div className="hero-editor-view">
                  {/* Flow Canvas */}
                  <div className="editor-canvas">
                    <div className="editor-canvas-header">
                      <span>Conversation Flow</span>
                      <span className="editor-node-count">12 nodes</span>
                    </div>
                    <div className="editor-nodes">
                      <div className="editor-node editor-node-active">
                        <div className="editor-node-header">
                          <div className="editor-node-number">1</div>
                          <div className="editor-node-info">
                            <div className="editor-node-title">Welcome Message</div>
                            <div className="editor-node-trigger">Trigger: On start</div>
                          </div>
                        </div>
                        <div className="editor-node-content">
                          "Hi! Ready to test our new checkout?"
                        </div>
                      </div>
                      <div className="editor-flow-arrow">
                        <ChevronRight className="w-5 h-5 text-slate-400" />
                      </div>
                      <div className="editor-node editor-node-secondary">
                        <div className="editor-node-header">
                          <div className="editor-node-number editor-node-number-purple">2</div>
                          <div className="editor-node-info">
                            <div className="editor-node-title">User Response</div>
                            <div className="editor-node-trigger">Type: Multiple choice</div>
                          </div>
                        </div>
                        <div className="editor-choices">
                          <div className="editor-choice editor-choice-selected">✓ Yes, let's start</div>
                          <div className="editor-choice">○ Not now</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Properties Panel */}
                  <div className="editor-properties">
                    <div className="editor-property-card">
                      <div className="editor-property-title">Node Properties</div>
                      <div className="editor-property-fields">
                        <div className="editor-field">
                          <label>Node Type</label>
                          <div className="editor-field-value">Welcome Message</div>
                        </div>
                        <div className="editor-field">
                          <label>Message Content</label>
                          <textarea 
                            className="editor-textarea"
                            rows="3"
                            value="Hi! Ready to test our new checkout?"
                            readOnly
                          />
                        </div>
                        <div className="editor-field">
                          <label>Delay (seconds)</label>
                          <input 
                            type="number" 
                            className="editor-input"
                            value="0.5"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                    <div className="editor-ai-suggestion">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="editor-ai-title">AI Suggestion</div>
                        <div className="editor-ai-text">Add a branching path for users who decline. This improves completion rates by 23%.</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="hero-analytics-view">
                  {/* KPI Cards */}
                  <div className="analytics-kpis">
                    <div className="analytics-kpi analytics-kpi-blue">
                      <div className="analytics-kpi-label">System Usability (SUS)</div>
                      <div className="analytics-kpi-value">84.2</div>
                      <div className="analytics-kpi-trend">
                        <TrendingUp className="w-3 h-3" />
                        <span>+12% vs last month</span>
                      </div>
                      <div className="analytics-progress">
                        <div className="analytics-progress-bar analytics-progress-blue"></div>
                      </div>
                    </div>

                    <div className="analytics-kpi analytics-kpi-purple">
                      <div className="analytics-kpi-label">Completion Rate</div>
                      <div className="analytics-kpi-value">92.5%</div>
                      <div className="analytics-kpi-trend">
                        <TrendingUp className="w-3 h-3" />
                        <span>+8% vs baseline</span>
                      </div>
                      <div className="analytics-progress">
                        <div className="analytics-progress-bar analytics-progress-purple"></div>
                      </div>
                    </div>

                    <div className="analytics-kpi analytics-kpi-green">
                      <div className="analytics-kpi-label">Active Participants</div>
                      <div className="analytics-kpi-value">1,247</div>
                      <div className="analytics-kpi-trend">
                        <Users className="w-3 h-3" />
                        <span>387 today</span>
                      </div>
                      <div className="analytics-bars">
                        {[...Array(20)].map((_, i) => (
                          <div key={i} className={`analytics-bar ${i < 15 ? 'analytics-bar-filled' : ''}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="analytics-chart">
                    <div className="analytics-chart-header">
                      <span>Response Distribution</span>
                      <select className="analytics-select">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>All time</option>
                      </select>
                    </div>
                    <div className="analytics-chart-bars">
                      {[65, 78, 85, 72, 88, 92, 87].map((height, i) => (
                        <div key={i} className="analytics-chart-col">
                          <div className="analytics-chart-bar" style={{height: `${height}%`}}></div>
                          <div className="analytics-chart-label">Day {i+1}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="hero-participant-view">
                  {/* Chat Interface */}
                  <div className="participant-chat">
                    <div className="participant-chat-header">
                      <div className="participant-avatar">B</div>
                      <div className="participant-info">
                        <div className="participant-name">BotLabX</div>
                        <div className="participant-status">
                          <div className="participant-status-dot"></div>
                          Online
                        </div>
                      </div>
                    </div>
                    <div className="participant-messages">
                      <div className="participant-message participant-message-bot">
                        <div className="participant-message-avatar">B</div>
                        <div className="participant-message-bubble participant-message-bubble-bot">
                          Hi! Thanks for participating in our study. Ready to test the new checkout experience?
                        </div>
                      </div>
                      <div className="participant-message participant-message-user">
                        <div className="participant-message-bubble participant-message-bubble-user">
                          Yes, let's get started!
                        </div>
                        <div className="participant-message-avatar participant-message-avatar-user">U</div>
                      </div>
                      <div className="participant-message participant-message-bot">
                        <div className="participant-message-avatar">B</div>
                        <div className="participant-message-bubble participant-message-bubble-bot">
                          Great! Please imagine you're buying a new laptop. Add it to cart and proceed to checkout.
                        </div>
                      </div>
                    </div>
                    <div className="participant-input">
                      <input 
                        type="text" 
                        placeholder="Type your message..."
                        className="participant-input-field"
                      />
                      <button className="participant-send-btn">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Survey Preview */}
                  <div className="participant-survey">
                    <div className="participant-survey-title">Post-Chat Survey (SUS)</div>
                    <div className="participant-survey-questions">
                      <div className="participant-question">
                        <p className="participant-question-text">I think I would like to use this system frequently.</p>
                        <div className="participant-question-options">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <div key={num} className="participant-option-col">
                              <div className={`participant-option ${num === 4 ? 'participant-option-selected' : ''}`}>
                                {num === 4 && <div className="participant-option-dot"></div>}
                              </div>
                              <span className="participant-option-label">{num}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="participant-question">
                        <p className="participant-question-text">I found the system unnecessarily complex.</p>
                        <div className="participant-question-options">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <div key={num} className="participant-option-col">
                              <div className={`participant-option ${num === 2 ? 'participant-option-selected' : ''}`}>
                                {num === 2 && <div className="participant-option-dot"></div>}
                              </div>
                              <span className="participant-option-label">{num}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="participant-survey-submit">
                        <button className="participant-submit-btn">Submit Survey</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;