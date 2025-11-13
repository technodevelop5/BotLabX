import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';
import '../styles/auth.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted:', formData);
  };

  return (
    <div className="auth-page">
      {/* Background Elements */}
      <div className="auth-bg">
        <div className="auth-bg-blob auth-bg-blob-1"></div>
        <div className="auth-bg-blob auth-bg-blob-2"></div>
        <div className="auth-bg-blob auth-bg-blob-3"></div>
      </div>

      <div className="auth-container">
        {/* Left Side - Branding */}
        <div className="auth-branding">
          <Link to="/" className="auth-logo">
            <div className="auth-logo-icon">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <div className="auth-logo-text">
              <span className="auth-logo-title">BotLabX</span>
              <span className="auth-logo-subtitle">AI-Powered UX Platform</span>
            </div>
          </Link>

          <div className="auth-branding-content">
            <h1 className="auth-branding-title">
              Welcome Back to<br />
              <span className="auth-branding-gradient">BotLabX</span>
            </h1>
            <p className="auth-branding-text">
              Continue your journey in conversational UX research. Access your experiments, analyze results, and build better user experiences.
            </p>

            <div className="auth-features">
              <div className="auth-feature">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Access all your experiments</span>
              </div>
              <div className="auth-feature">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Real-time analytics dashboard</span>
              </div>
              <div className="auth-feature">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Collaborate with your team</span>
              </div>
            </div>
          </div>

          <div className="auth-testimonial">
            <div className="auth-testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="auth-testimonial-text">
              "BotLabX has revolutionized how we conduct UX research. The platform is intuitive and powerful."
            </p>
            <div className="auth-testimonial-author">
              <div className="auth-testimonial-avatar">S</div>
              <div>
                <div className="auth-testimonial-name">Sarah Chen</div>
                <div className="auth-testimonial-role">Lead UX Researcher</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <div className="auth-form-header">
              <h2 className="auth-form-title">Log In</h2>
              <p className="auth-form-subtitle">
                Don't have an account? <Link to="/signup" className="auth-link">Sign up for free</Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="form-input-wrapper">
                  <Mail className="form-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="form-group">
                <div className="form-label-row">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Link to="/forgot-password" className="form-link">
                    Forgot password?
                  </Link>
                </div>
                <div className="form-input-wrapper">
                  <Lock className="form-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="form-icon-button"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="form-checkbox-group">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <label htmlFor="rememberMe" className="form-checkbox-label">
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="auth-submit-btn">
                <span className="auth-submit-content">
                 Log In
                  <ArrowRight className="w-5 h-5" />
                </span>
                <div className="auth-submit-overlay"></div>
              </button>
            </form>

            {/* Divider */}
            <div className="auth-divider">
              <span className="auth-divider-text">Or continue with</span>
            </div>

            {/* Social Login */}
            <div className="auth-social">
              <button className="auth-social-btn">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button className="auth-social-btn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="auth-trust">
              <div className="auth-trust-item">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>SSL Encrypted</span>
              </div>
              <div className="auth-trust-item">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;