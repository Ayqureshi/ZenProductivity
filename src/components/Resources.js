import React from 'react';
import './Resources.css';

function Resources() {
  return (
    <div className="resources-bg">
      <h2 className="title">Resources</h2>
      <p className="description">Find helpful resources and articles related to mental health.</p>
      <ul>
        <li>
          <a href="https://www.example.com/resource1" target="_blank" rel="noopener noreferrer">
            Resource 1
          </a>
        </li>
        <li>
          <a href="https://www.example.com/resource2" target="_blank" rel="noopener noreferrer">
            Resource 2
          </a>
        </li>
        <li>
          <a href="https://www.example.com/resource3" target="_blank" rel="noopener noreferrer">
            Resource 3
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Resources;
