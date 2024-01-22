import React, { useState } from 'react'
import "../chatbot/ChatBotPage.css";

// Contains the ChatBotPage
const ChatBotPage = () => {
    const [input, setInput] = useState('');

    // Handle OPENAI Logic here using our node.js backend
    const handleSend = () => {
        const response = sendMessage(input);
    }

  return (
        <div className='chatbot-container'>
            <h1 className='chatbot-title'>Zippy the ChatBot</h1>
            <div className='first-section'>
                <div className='chatbot-img sm-col-12'>
                    <img src="https://media.tenor.com/rPYosYmsvokAAAAC/work-homework.gif" alt="working picture" />
                </div>
                <div className='bubble-container'>
                    <div className='chatbot-text sm-col-12'>
                    We have all been there. Whether it is an impolite team leader, an impossible to complete task, or an existential crisis--work is stressful. But stress no more! Zippy the Chatbot is here to satisfy your productivity needs. It'll answer any productivity related questions.
                    </div>
                </div>
            </div>
            <h1> Scroll Below to start typing</h1>
            <div className='chatbot-section'>
                
            </div>
        </div>
  );
}

export default ChatBotPage