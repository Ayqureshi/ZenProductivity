import React from 'react';
import img4 from '../images/search.png';
import './Articles2.css';
import article1img from './pictures/articles_pic_1.jpeg';
import article2img from './pictures/articles_pic_2.jpg';

// Inside the Router component

function Articles() {
  return (
    <div>
      <h1 className='article-header'> Article Page </h1>

      <div className="searchbar-container">
            <div className="searchbar-wrapper">
                <input type="text" placeholder="Search articles" className="searchbar-box"/>
                <img src={img4} alt="" className="searchbar-image" />
            </div>
      </div>

      <div className='popular-articles-wrapper'>
        <h2 className='article-section-title'>Popular Articles</h2>
        <div className='popular-articles-container'>

          <a href="/article1" className='article-container1'>
              <div className='article-image-container'>
                <img src={article1img} alt="Article 1" className='article-img-cover' />
                <div className='overlay'>
                  <a href="/article1">Article 1</a>
                </div>
              </div>
          </a>

            <div className='popular-articles-subcontainer'>
              
              <a href="/article2" className='article-container2'>
                <div className='article-image-container2'>
                  <img src={article2img} alt="Article 2" className='article-img-cover' />
                  <div className='overlay'>
                    <a href="/article2">Article 2</a>
                  </div>
                </div>
              </a>

              <a href="/article3" className='article-container2'>
                <div className='article-image-container2'>
                  <img src={article2img} alt="Article 3" className='article-img-cover' />
                  <div className='overlay'>
                    <a href="/article3">Article 3</a>
                  </div>
                </div>
              </a>

            </div>

          </div>
        </div>

      <div>

      <div className='recent-articles-wrapper'>
        <h2 className='article-section-title'>Recently Published</h2>
        <div className='recent-articles-container'>

          <a href="/article4" className='article-container3'>
            <div className='article-image-container3'>
              <img src={article2img} alt="Article 4" className='article-img-cover' />
              <div className='overlay'>
                <a href="/article4">Article 4</a>
              </div>
            </div>
          </a>

          <a href="/article5" className='article-container3'>
            <div className='article-image-container3'>
              <img src={article2img} alt="Article 5" className='article-img-cover' />
              <div className='overlay'>
                <a href="/article5">Article 5</a>
              </div>
            </div>
          </a>

          <a href="/article6" className='article-container3'>
            <div className='article-image-container3'>
              <img src={article2img} alt="Article 6" className='article-img-cover' />
              <div className='overlay'>
                <a href="/article6">Article 6</a>
              </div>
            </div>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Articles;