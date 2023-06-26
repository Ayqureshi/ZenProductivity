import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-bg">
      <h1 className="title">Welcome to Zen Productivity</h1>
      <p className="description">
        Here you can find various resources and tools to support your ability to truly get in the &quot;zone&quot; of peak mental well-being and productivity.
      </p>
      <div className="features">
        <div className="feature">
          <i className="fas fa-heartbeat"></i>
          <h2>Articles</h2>
          <p>Read about many of the ways we as individuals can grow and become more productive.</p>
        </div>
        <div className="feature">
          <i className="fas fa-cogs"></i>
          <h2>Audio Interviews</h2>
          <p>Learn from successful individuals on what habits they built to get to where they are and what they needed to focus on to keep them there.</p>
        </div>
        <div className="feature">
          <i className="fas fa-book"></i>
          <h2>Community</h2>
          <p>Interact with other members in a way that enables both you and the other members to learn from each other and teach each other.</p>
        </div>
      </div>

      <div className="button-container">
        <a href="https://buy.stripe.com/3cseVu8yp3YQfio4gg" target="_blank" rel="noopener noreferrer">
          <button>Buy Membership</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
