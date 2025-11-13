// import React, { useState, useEffect } from 'react';
// import { MessageSquare, Layout, Target, BarChart3, Settings, Menu, X, ArrowRight } from 'lucide-react';
// import '../styles/landing.css';
// import '../styles/navbar.css';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Dashboard', icon: <Layout className="w-4 h-4" />, badge: null },
//     { name: 'Experiments', icon: <Target className="w-4 h-4" />, badge: 'New' },
//     { name: 'Chatbot Editor', icon: <MessageSquare className="w-4 h-4" />, badge: null },
//     { name: 'Results', icon: <BarChart3 className="w-4 h-4" />, badge: null },
//     { name: 'Settings', icon: <Settings className="w-4 h-4" />, badge: null }
//   ];

//   return (
//     <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
//       <div className="navbar-container">
//         <div className="navbar-content">
//           {/* Logo */}
//           <div className="navbar-logo">
//             <div className="logo-icon-wrapper">
//               <div className="logo-icon">
//                 <MessageSquare className="w-6 h-6 text-white" />
//               </div>
//               <div className="logo-status"></div>
//             </div>
//             <div className="logo-text">
//               <span className="logo-title">BotLabX</span>
//               <span className="logo-subtitle">AI-Powered UX Platform</span>
//             </div>
//           </div>
          
//           {/* Main Navigation */}
//           <div className="nav-items">
//             {navItems.map((item, i) => (
//               <a 
//                 key={i}
//                 href={`#${item.name.toLowerCase().replace(' ', '-')}`}
//                 className="nav-item"
//               >
//                 {item.icon}
//                 <span>{item.name}</span>
//                 {item.badge && (
//                   <span className="nav-badge">{item.badge}</span>
//                 )}
//                 <div className="nav-item-underline"></div>
//               </a>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="nav-cta">
//             <button className="btn-signin">Sign In</button>
//             <button className="btn-trial">
//               <span className="btn-trial-content">
//                 Start Free Trial
//                 <ArrowRight className="w-4 h-4" />
//               </span>
//               <div className="btn-trial-overlay"></div>
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)}>
//             {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenu && (
//           <div className="mobile-menu">
//             <div className="mobile-menu-content">
//               {navItems.map((item, i) => (
//                 <a 
//                   key={i}
//                   href={`#${item.name.toLowerCase().replace(' ', '-')}`}
//                   className="mobile-menu-item"
//                   onClick={() => setMobileMenu(false)}
//                 >
//                   {item.icon}
//                   <span>{item.name}</span>
//                   {item.badge && (
//                     <span className="mobile-menu-badge">{item.badge}</span>
//                   )}
//                 </a>
//               ))}
//               <div className="mobile-menu-actions">
//                 <button className="mobile-btn-signin">Sign In</button>
//                 <button className="mobile-btn-trial">Start Free Trial</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Layout, Target, BarChart3, Settings, Menu, X, ArrowRight } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Dashboard', icon: <Layout className="w-4 h-4" />, badge: null },
    { name: 'Experiments', icon: <Target className="w-4 h-4" />, badge: 'New' },
    { name: 'Chatbot Editor', icon: <MessageSquare className="w-4 h-4" />, badge: null },
    { name: 'Results', icon: <BarChart3 className="w-4 h-4" />, badge: null },
    { name: 'Settings', icon: <Settings className="w-4 h-4" />, badge: null }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="logo-icon-wrapper">
              <div className="logo-icon">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div className="logo-status"></div>
            </div>
            <div className="logo-text">
              <span className="logo-title">BotLabX</span>
              <span className="logo-subtitle">AI-Powered UX Platform</span>
            </div>
          </Link>
          
          {/* Main Navigation */}
          <div className="nav-items">
            {navItems.map((item, i) => (
              <a 
                key={i}
                href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                className="nav-item"
              >
                {item.icon}
                <span>{item.name}</span>
                {item.badge && (
                  <span className="nav-badge">{item.badge}</span>
                )}
                <div className="nav-item-underline"></div>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="nav-cta">
            <Link to="/login" className="btn-signin">Sign In</Link>
            <Link to="/signup" className="btn-trial">
              <span className="btn-trial-content">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </span>
              <div className="btn-trial-overlay"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {navItems.map((item, i) => (
                <a 
                  key={i}
                  href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                  className="mobile-menu-item"
                  onClick={() => setMobileMenu(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="mobile-menu-badge">{item.badge}</span>
                  )}
                </a>
              ))}
              <div className="mobile-menu-actions">
                <Link to="/login" className="mobile-btn-signin">Sign In</Link>
                <Link to="/signup" className="mobile-btn-trial">Start Free Trial</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;