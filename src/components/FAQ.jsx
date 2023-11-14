import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    { question: 'Q: What is React?', answer: 'React is a JavaScript library for building user interfaces.', isOpen: false },
    { question: 'Q: How do I install React?', answer: 'You can install React using npm or yarn by running the command: npm install react.', isOpen: false },
    { question: 'Q: What is JSX?', answer: 'JSX is a syntax extension for JavaScript used with React to describe what the UI should look like.', isOpen: false },
    { question: 'Q: What are React Components?', answer: 'React Components are independent, reusable pieces of code that manage their own state and can be composed together.', isOpen: false },
    { question: 'Q: What is the Virtual DOM?', answer: 'The Virtual DOM is a lightweight copy of the actual DOM, enabling React to efficiently update the actual DOM.', isOpen: false },
    { question: 'Q: What is the role of Babel in React?', answer: 'Babel is used to transform JSX and ES6 code into plain JavaScript that browsers can interpret.', isOpen: false },
    { question: 'Q: How do I create forms in React?', answer: 'Forms in React can be created using HTML form elements and managing their state with React state or libraries like Formik.', isOpen: false },
    // Add more FAQ items as needed
  ]);

  const toggleFAQ = (index) => {
    const updatedFaqs = faqs.map((faq, idx) => {
      if (idx === index) {
        return { ...faq, isOpen: !faq.isOpen };
      } else {
        return { ...faq };
      }
    });
    setFaqs(updatedFaqs);
  };

  return (
    <div className="faq-page">
      <h1 className="faq-title">FAQ</h1>
      <p className="tit-text"> Click on any of the speech bubbles to reveal the answer</p>
      <div className="faq-center">
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <div className="question-bubble" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {faq.isOpen && (
              <div className="answer-bubble">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
