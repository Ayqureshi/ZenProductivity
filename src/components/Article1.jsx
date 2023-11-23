import React from 'react';
import './Articles.css';
import img from '../images/ken-cheung-KonWFWUaAuk-unsplash 6.png';

const Article1 = () => {
  return (
    <div>
    <div className="title">
      <h1 className="title-text">From Goon to Hero</h1>
    </div>
    <div className="img-container">
      <img src={img} alt="" className="img" />
    </div>
    <div className="body-container">
      <p className="body"> 
      Ke Huy Quan, a name you may remember as the child star of &quot;The Goonies&quot; and  &quot;Indiana Jones and the Temple of Doom,&quot; did not find the success he had hoped for as he transitioned into adulthood. As a child actor, he captured the hearts of many in blockbuster films. However, as he entered his 20s, he confronted a harsh reality: acting roles became scarce. The once-promising gigs had evaporated, leaving Ke Huy Quan disheartened. In his own words, he told himself that acting was no longer enjoyable, but deep down, he was disheartened by the limited opportunities available to him as an Asian-American actor in the industry.
      </p>
      <p className="body"> 
      In his 20s, Ke Huy Quan made the challenging decision to step away from the limelight and shift to off-camera roles within the film industry. He pursued further education at the University of Southern California (USC) to explore alternative avenues in the world of entertainment.
      </p>
      <p className="body"> 
      However, Ke Huy Quans acting journey was far from over. Over the years, he noticed a promising shift in the industry. The roles for Asian actors were gradually expanding and becoming more substantial, offering a glimmer of hope. The turning point for Ke Huy Quan came when he watched the groundbreaking film &quot;Crazy Rich Asians.&quot; The movie not only resonated with audiences but also served as a powerful reminder of the potential opportunities for Asian-American actors. Inspired and motivated, Ke Huy Quan decided to take a leap of faith and return to the world of acting. Although he felt a degree of skepticism, he also carried a sense of optimism, believing that there might be an opportunity waiting for him in this evolving landscape of the film industry.
      </p>
      <p className="body"> 
      &quot;When I read the script for the first time,&quot; Ke Huy Quan reflects, &quot;I was overwhelmed with emotion because it was a script I had yearned to read for many years. It was a role that felt tailor-made for me, and I was simply elated.&quot; Stepping in front of the camera for the first time in two decades, Ke Huy Quan found himself reinvigorated. He describes the experience as a reawakening, a return to what he felt had been missing in his life for so many years. &quot;All of a sudden,&quot; he shares, &quot;I felt like I was back where I needed to be.&quot;

      </p>
      <p className="body"> 
      The industry took note of Ke Huy Quan&apos;s outstanding performance as Waymond, and he received recognition and acclaim. He won an Academy Award for his portrayal, a testament to his remarkable journey and the newfound opportunities in the ever-evolving landscape of film and diversity. His newfound fame has opened doors to more opportunities in the film space, including roles such as Ouroboros in the Marvel Cinematic Universe(&apos;)s &quot;Loki&quot; TV show. Ke Huy Quan&apos;s story is a powerful reminder that, with determination and resilience, it&apos;s never too late to follow your passion and rediscover your path in life. Career success does not always follow a linear path; it often requires constant adjustments and leaps of faith before you arrive at your destined reality. Just as portrayed in the multiverse movie Ke Huy Quan stars in, life may be tumultuous and chaotic, but stability is bound to find you.

      </p>
    </div>
    <div className="buttons-container">
      <button className="button-style">
        <h1><a href="/articles">Back</a></h1>
        
      </button>
      <button className="button-style">
      <h1><a href="/article2">Next</a></h1>
      </button>
    </div>
    </div>
  );
};


export default Article1;