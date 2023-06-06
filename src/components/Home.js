import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-bg">
      <h1 className="title">Welcome to the Mental Health Program</h1>
      <p className="description">
        Here you can find various resources and tools to support your mental well-being.
      </p>
      <div className="features">
        <div className="feature">
          <i className="fas fa-heartbeat"></i>
          <h2>Wellness Assessments</h2>
          <p>Take assessments to evaluate your mental health and track your well-being over time.</p>
        </div>
        <div className="feature">
          <i className="fas fa-cogs"></i>
          <h2>Therapy Modules</h2>
          <p>Explore interactive therapy modules designed to help you develop coping strategies and improve your mental resilience.</p>
        </div>
        <div className="feature">
          <i className="fas fa-book"></i>
          <h2>Resources</h2>
          <p>Access a curated collection of articles, books, and videos to learn more about mental health and find support.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
