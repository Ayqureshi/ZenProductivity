import React from 'react';
import './Articles.css';
import img from '../images/ken-cheung-KonWFWUaAuk-unsplash 6.png';

const Article2 = () => {
  return (
    <div>
    <div className="title">
      <h1 className="title-text">I love Tim Cook</h1>
    </div>
    <div className="img-container">
      <img src={img} alt="" className="img" />
    </div>
    <div className="body-container">
      <p className="body"> 
      Tim Cook, the man behind the Apple empire, is a name synonymous with innovation and leadership. Yet, his journey to maintaining a healthy mental state in the high-stress world of technology is a lesson for all of us. The weight of his responsibilities as the CEO of the world&apos;s most valuable company is immense, and it&apos;s a testament to his personal strategies that he manages to carry this weight with grace.
      </p>
      <p className="body"> 
      One might assume that the head of a tech giant like Apple, a company known for its relentless pursuit of excellence, has little time for self-care. However, it&apos;s precisely Tim Cook&apos;s approach to maintaining his mental well-being that sets him apart as a role model for professionals in demanding roles.
      </p>
      <p className="body"> 
       1. Work-Life Balance: Tim Cook knows the value of a work-life balance, even in a position that demands constant attention. By setting boundaries and making time for personal life, he sends a clear message that everyone, regardless of their stature, should prioritize their own well-being.
      </p>
      <p className="body"> 
      2. Regular Exercise: Cook&apos;s commitment to regular exercise demonstrates that even in the midst of a demanding job, one can find time to care for their physical and mental health. Exercise not only keeps the body fit but also rejuvenates the mind.
      </p>
      <p className="body"> 
      3. Healthy Diet: His recognition of the link between a healthy diet and mental well-being underscores the importance of fueling our bodies with nutritious foods. What we eat affects not only our physical health but also our cognitive function and emotional well-being.
      </p>
      <p className="body"> 
      4. Quality Sleep: Tim Cook&apos;s emphasis on the significance of quality sleep resonates with anyone who has ever felt the impact of sleep deprivation. It&apos;s a reminder that adequate rest is the cornerstone of mental health.
      </p>
      <p className="body"> 
      5. Stress Management: The CEO&apos;s reported interest in meditation and mindfulness practices is an acknowledgment of the power of these techniques in managing the stress that accompanies his role. These practices can help anyone find a sense of calm in a hectic world.
      </p>
      <p className="body"> 
      6. Time Management: Tim Cook&apos;s ability to manage time efficiently teaches us that a well-structured schedule can reduce stress and ensure that every minute is used wisely.
      </p>
      <p className="body"> 
      7. Seeking Support: His openness to seeking support when needed is a powerful message. It reminds us that it&apos;s okay to ask for help, whether from friends, family, or a professional.
      </p>
      <p className="body"> 
      8. Maintaining Boundaries: The clear boundaries he sets between work and personal life illustrate that even the most demanding jobs should not infringe upon our personal well-being
      </p>
      <p className="body"> 
      9. Engaging Hobbies: His pursuit of hobbies outside of work shows us that finding joy in personal interests can be a rejuvenating escape from the daily grind.
      </p>
      <p className="body"> 
      10. Connection and Social Support: Tim Cook&apos;s ability to build and maintain strong social connections highlights the importance of surrounding oneself with a supportive network that can provide comfort and strength.
      </p>
      <p className="body"> 
      Tim Cook is not just the face of Apple; he&apos;s a symbol of how a high-profile professional can maintain a healthy mental state. There is a lot to learn from his personal strategies, and they serve as an inspiration for us all. While we may not run a tech giant, we can certainly emulate his approach to maintaining mental well-being in our own lives. After all, the lessons from Tim Cook are not just for the business world; they are for anyone seeking balance and mental health in a demanding, fast-paced life.
      </p>
    </div>
    <div className="buttons-container">
      <button className="button-style">
        <h1><a href="/article1">Back</a></h1>
      </button>
      <button className="button-style">
      <h1><a href="/article3">Next</a></h1>
      </button>
    </div>
    </div>
  );
};


export default Article2;