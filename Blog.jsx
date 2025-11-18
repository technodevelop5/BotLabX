import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, X } from 'lucide-react';
import '../styles/pages.css';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: "Understanding the System Usability Scale (SUS)",
      date: "November 15, 2024",
      author: "TechnoDevelop Team",
      excerpt: "A comprehensive guide to one of the most widely-used usability metrics in UX research.",
      content: `
        <h2>What is the System Usability Scale?</h2>
        <p>The System Usability Scale (SUS) is a simple, ten-item scale giving a global view of subjective assessments of usability. It was developed by John Brooke in 1986 and has become an industry standard for measuring usability.</p>
        
        <h3>The 10 Questions</h3>
        <p>The SUS consists of 10 questions that users answer on a 5-point scale from "Strongly Disagree" to "Strongly Agree":</p>
        <ol>
          <li>I think that I would like to use this system frequently.</li>
          <li>I found the system unnecessarily complex.</li>
          <li>I thought the system was easy to use.</li>
          <li>I think that I would need the support of a technical person to be able to use this system.</li>
          <li>I found the various functions in this system were well integrated.</li>
          <li>I thought there was too much inconsistency in this system.</li>
          <li>I would imagine that most people would learn to use this system very quickly.</li>
          <li>I found the system very cumbersome to use.</li>
          <li>I felt very confident using the system.</li>
          <li>I needed to learn a lot of things before I could get going with this system.</li>
        </ol>
        
        <h3>Calculating the Score</h3>
        <p>The SUS score is calculated by:</p>
        <ul>
          <li>For odd-numbered items: subtract 1 from the user response</li>
          <li>For even-numbered items: subtract the user response from 5</li>
          <li>Sum all values and multiply by 2.5</li>
        </ul>
        <p>This gives you a score from 0 to 100, though it's not a percentage.</p>
        
        <h3>Interpreting SUS Scores</h3>
        <p>Research has shown that:</p>
        <ul>
          <li><strong>68+:</strong> Above average usability</li>
          <li><strong>68:</strong> Average usability</li>
          <li><strong>Below 68:</strong> Below average usability</li>
          <li><strong>80+:</strong> Excellent usability</li>
        </ul>
        
        <h3>Why Use SUS?</h3>
        <p>SUS is popular because it's:</p>
        <ul>
          <li>Quick and easy to administer</li>
          <li>Can be used on small sample sizes with reliable results</li>
          <li>Valid - it can effectively differentiate between usable and unusable systems</li>
          <li>Industry standard with decades of research backing it</li>
        </ul>
      `,
      category: "Methodology"
    },
    {
      id: 2,
      title: "Designing Effective Chatbot Conversations",
      date: "November 10, 2024",
      author: "TechnoDevelop Team",
      excerpt: "Best practices for creating natural, engaging chatbot interactions that users love.",
      content: `
        <h2>The Art of Conversational Design</h2>
        <p>Chatbots are becoming increasingly prevalent, but creating one that feels natural and helpful requires careful design. Here are key principles for effective chatbot conversations.</p>
        
        <h3>1. Start with Clear Purpose</h3>
        <p>Before designing any conversation, define:</p>
        <ul>
          <li>What problem does your chatbot solve?</li>
          <li>Who is your target audience?</li>
          <li>What tasks should it accomplish?</li>
          <li>What is out of scope?</li>
        </ul>
        
        <h3>2. Write Like a Human</h3>
        <p>Key principles for natural conversation:</p>
        <ul>
          <li><strong>Use contractions:</strong> "I'll" instead of "I will"</li>
          <li><strong>Keep it concise:</strong> Short messages are easier to read on mobile</li>
          <li><strong>Show personality:</strong> But don't overdo it with emojis</li>
          <li><strong>Acknowledge mistakes:</strong> "I'm not sure I understood that"</li>
        </ul>
        
        <h3>3. Design for Errors</h3>
        <p>Users will inevitably:</p>
        <ul>
          <li>Make typos</li>
          <li>Ask questions you didn't anticipate</li>
          <li>Try to break your bot</li>
          <li>Get confused about what to do</li>
        </ul>
        <p>Have clear fallback responses and always offer a way forward.</p>
        
        <h3>4. Provide Quick Replies</h3>
        <p>When possible, offer buttons or quick reply options instead of requiring typing. This:</p>
        <ul>
          <li>Reduces cognitive load</li>
          <li>Speeds up interactions</li>
          <li>Prevents errors</li>
          <li>Shows users what's possible</li>
        </ul>
        
        <h3>5. Set Expectations</h3>
        <p>Be upfront about:</p>
        <ul>
          <li>What your bot can and cannot do</li>
          <li>How long responses might take</li>
          <li>When a human will take over</li>
          <li>How to get help</li>
        </ul>
        
        <h3>6. Test with Real Users</h3>
        <p>The only way to know if your chatbot works is to test it with actual users. Look for:</p>
        <ul>
          <li>Where do users get stuck?</li>
          <li>What questions do they ask that you didn't expect?</li>
          <li>How long do conversations take?</li>
          <li>Are users satisfied with the outcome?</li>
        </ul>
        
        <h3>Example: Poor vs Good Design</h3>
        <p><strong>Poor:</strong><br/>
        Bot: "Please provide your full name, email address, phone number, and reason for contacting us."</p>
        
        <p><strong>Good:</strong><br/>
        Bot: "Hi! I'm here to help. What's your name?"<br/>
        User: "John"<br/>
        Bot: "Nice to meet you, John! What's the best email to reach you?"</p>
      `,
      category: "Design"
    },
    {
      id: 3,
      title: "AttrakDiff: Measuring Beyond Usability",
      date: "November 5, 2024",
      author: "TechnoDevelop Team",
      excerpt: "How AttrakDiff helps us understand both the pragmatic and hedonic qualities of user experiences.",
      content: `
        <h2>Beyond Basic Usability</h2>
        <p>While metrics like SUS measure how easy a system is to use, AttrakDiff goes deeper by measuring both pragmatic (usability) and hedonic (pleasure) qualities of interactive products.</p>
        
        <h3>What is AttrakDiff?</h3>
        <p>Developed by Marc Hassenzahl, AttrakDiff is a questionnaire that measures user experience across four dimensions:</p>
        
        <h4>1. Pragmatic Quality (PQ)</h4>
        <p>This measures how well users can achieve their goals. It's similar to traditional usability - is the product:</p>
        <ul>
          <li>Simple vs Complicated</li>
          <li>Practical vs Impractical</li>
          <li>Clear vs Confusing</li>
          <li>Predictable vs Unpredictable</li>
        </ul>
        
        <h4>2. Hedonic Quality - Stimulation (HQ-S)</h4>
        <p>This measures how stimulating and novel the product is:</p>
        <ul>
          <li>Creative vs Dull</li>
          <li>Captivating vs Boring</li>
          <li>Novel vs Ordinary</li>
          <li>Innovative vs Conservative</li>
        </ul>
        
        <h4>3. Hedonic Quality - Identity (HQ-I)</h4>
        <p>This measures how well users can identify with the product:</p>
        <ul>
          <li>Professional vs Unprofessional</li>
          <li>Premium vs Cheap</li>
          <li>Presentable vs Unpresentable</li>
          <li>Stylish vs Tacky</li>
        </ul>
        
        <h4>4. Attractiveness (ATT)</h4>
        <p>This is the global evaluation of the product's appeal:</p>
        <ul>
          <li>Pleasant vs Unpleasant</li>
          <li>Good vs Bad</li>
          <li>Appealing vs Unappealing</li>
          <li>Attractive vs Unattractive</li>
        </ul>
        
        <h3>Why Use AttrakDiff?</h3>
        <p>AttrakDiff is valuable because:</p>
        <ul>
          <li>It recognizes that UX is more than just usability</li>
          <li>Products can be usable but boring (high PQ, low HQ)</li>
          <li>Or exciting but hard to use (low PQ, high HQ)</li>
          <li>It helps identify where to improve</li>
        </ul>
        
        <h3>Interpreting Results</h3>
        <p>Results are plotted on a portfolio chart with four quadrants:</p>
        <ul>
          <li><strong>Desired:</strong> High PQ, High HQ (the goal!)</li>
          <li><strong>Task-oriented:</strong> High PQ, Low HQ (functional but boring)</li>
          <li><strong>Self-oriented:</strong> Low PQ, High HQ (exciting but hard to use)</li>
          <li><strong>Too self-oriented:</strong> Low on both (needs work)</li>
        </ul>
        
        <h3>When to Use AttrakDiff</h3>
        <p>AttrakDiff is particularly useful for:</p>
        <ul>
          <li>Consumer products where aesthetics matter</li>
          <li>Comparing different design alternatives</li>
          <li>Understanding why users prefer one product over another</li>
          <li>Products where emotion and pleasure are important</li>
        </ul>
        
        <h3>Practical Application</h3>
        <p>In our BotLabX platform, we use AttrakDiff to evaluate chatbot experiences because:</p>
        <ul>
          <li>Chatbots should be both functional (PQ) and engaging (HQ)</li>
          <li>Users should enjoy the conversation, not just tolerate it</li>
          <li>The personality and tone matter as much as the functionality</li>
          <li>We want to create delightful, not just usable, experiences</li>
        </ul>
      `,
      category: "Methodology"
    }
  ];

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  const openPost = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

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
          <p className="page-subtitle">Insights into UX research methodologies and chatbot design</p>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-wrapper">
          <div className="blog-list">
            {posts.map((post) => (
              <article key={post.id} className="blog-card" onClick={() => openPost(post)}>
                <div className="blog-category">{post.category}</div>
                <div className="blog-date">{post.date}</div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-author">By {post.author}</p>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button className="blog-read-more">Read Full Article →</button>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Full Post Modal */}
      {selectedPost && (
        <div className="blog-modal-overlay" onClick={closePost}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal-close" onClick={closePost}>
              <X className="w-6 h-6" />
            </button>
            <div className="blog-modal-header">
              <div className="blog-category">{selectedPost.category}</div>
              <h1 className="blog-modal-title">{selectedPost.title}</h1>
              <div className="blog-modal-meta">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>By {selectedPost.author}</span>
              </div>
            </div>
            <div 
              className="blog-modal-content"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;