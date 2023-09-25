import React from 'react';
import './Resources.css';

const ResourcePage = () => {
  const resources = [
    {
      title: 'Resource 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et erat convallis, interdum nisl sit amet, mollis turpis.',
      link: 'https://www.example.com/resource1',
    },
    {
      title: 'Resource 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et erat convallis, interdum nisl sit amet, mollis turpis.',
      link: 'https://www.example.com/resource2',
    },
    {
      title: 'Resource 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et erat convallis, interdum nisl sit amet, mollis turpis.',
      link: 'https://www.example.com/resource3',
    },
    {
      title: 'Resource 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et erat convallis, interdum nisl sit amet, mollis turpis.',
      link: 'https://www.example.com/resource4',
    },
    {
      title: 'Resource 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et erat convallis, interdum nisl sit amet, mollis turpis.',
      link: 'https://www.example.com/resource5',
    },
    {
      title: 'Resource 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et erat convallis, interdum nisl sit amet, mollis turpis.',
      link: 'https://www.example.com/resource6',
    },
  ];

  return (
    <div className="resources-container">
      <h2 className="resources-title">Resources</h2>
      <p className="resources-description">Find helpful resources and articles related to mental health.</p>
      <div className="resources-list">
        {resources.map((resource, index) => (
          <a className="resource-link" href={resource.link} target="_blank" rel="noopener noreferrer" key={index}>
            <div className="resource-content">
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-description">{resource.description}</p>
            </div>
            <div className="resource-arrow">&#10132;</div>
          </a>
        ))}
      </div>
      <p className="more-resources">For more resources, visit our recommended websites and blogs.</p>
      <div className="additional-links">
        <a href="https://www.example.com/link1" target="_blank" rel="noopener noreferrer">Additional Link 1</a>
        <span className="link-separator">|</span>
        <a href="https://www.example.com/link2" target="_blank" rel="noopener noreferrer">Additional Link 2</a>
        <span className="link-separator">|</span>
        <a href="https://www.example.com/link3" target="_blank" rel="noopener noreferrer">Additional Link 3</a>
      </div>
    </div>
  );
}

export default ResourcePage;
