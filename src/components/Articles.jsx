import React from 'react';
import './Articles.css';

function Articles() {
  return (
    <div className="container">
      <h2 className="title">Articles</h2>
      <p className="description">Explore articles related to mental health.</p>
      {/* Add article components and logic here */}
      <div className="article">
        <h3>Article 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="article">
        <h3>Article 2</h3>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="article">
        <h3>Article 3</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      {/* Add more articles */}
    </div>
  );
}

export default Articles;
