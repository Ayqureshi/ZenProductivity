import React from 'react';
import './Articles.css';
import img from '../images/ken-cheung-KonWFWUaAuk-unsplash 6.png';

const Article3 = () => {
  return (
    <div>
    <div className="title">
      <h1 className="title-text">Leaving a Legacy</h1>
    </div>
    <div className="img-container">
      <img src={img} alt="" className="img" />
    </div>
    <div className="body-container">
      <p className="body"> 
      In the challenging realm of entrepreneurship, turning a vision into reality can often seem like an insurmountable task. For Andrew Kolvoski, an alumnus of the University of Southern California (USC), it became a necessity.
Andrew was an ordinary USC student, navigating the common challenges of college life, from rigorous midterms to burning the midnight oil to complete essays. While many of his peers resorted to drugs like Adderall, a widespread practice among college students, Andrew opted for a different, safer path, relying on coffee to fuel his energy.

      </p>
      <p className="body"> 
      However, as Andrew approached his senior year, he couldn&apos;t help but notice that he was an exception. Many of his friends and fellow students had turned to Adderall for that coveted extra energy boost, driven by the relentless demands of college life.
This realization inspired Andrew to take action. It was the birth of BrainzPower, a venture founded with the noble goal of providing a safer alternative to the misuse of prescription medications on college campuses, particularly focusing on cognitive enhancers like Adderall.

      </p>
      <p className="body"> 
      Recognizing the myriad risks and challenges associated with the misuse of Adderall, Andrew embarked on a mission to create a product that would help students enhance their focus and cognitive abilities without resorting to prescription drugs. His approach was informed by extensive research and collaboration with experts in the field, leading to the development of a unique and innovative solution.
While Andrew&apos;s journey was marked by determination and vision, he faced skepticism, even from his own family, who questioned the feasibility of selling such a product through unconventional platforms like Instagram. The idea of managing a business while pursuing a college degree seemed like a daunting task.

      </p>
      <p className="body"> 
      However, Andrew was quick to realize the potential of social media, primarily Instagram, as a powerful tool to spread awareness about BrainzPower. By leveraging compelling content and effective marketing strategies, he managed to grow the venture&apos;s monthly sales from $10,000 to nearly $30,000.
 Andrew Kolvoski&apos;s entrepreneurial journey serves as a compelling example of how entrepreneurship can address critical issues within the context of college life. Not only did he provide a safer option for students looking to enhance their focus and cognitive abilities, but he also raised awareness about the inherent risks associated with the misuse of prescription medications, such as Adderall.
      </p>
      <p className="body"> 
      As Andrew graduates from USC, his legacy is marked not only by the degree he has earned but also by the positive impact he has had on students striving for academic success while prioritizing their health and well-being. His story underscores the immense potential of entrepreneurship to transform a campus-wide issue into a thriving business that not only benefits individuals but also society as a whole. In an era where young adults face unprecedented access to substances and growing pressures, it is entrepreneurs like Andrew who are making a tangible difference by addressing critical issues and offering practical solutions.
      </p>
    </div>
    <div className="buttons-container">
      <button className="button-style">
        <h1><a href="/article2">Back</a></h1>
      </button>
      <button className="button-style">
      <h1><a href="/article4">Next</a></h1>
      </button>
    </div>
    </div>
  );
};


export default Article3;