import React from 'react';
//import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './Articles.css';

// Inside the Router component

function Articles() {
  return (
    <div>
      <h1> Article Page </h1>
      <button>
        <a href="/article1">Article1</a>
      </button>
      <button>
        <a href="/article2">Article2</a>
      </button>
      <button>
        <a href="/article3">Article3</a>
      </button>
      <button>
        <a href="/article4">Article4</a>
      </button>
      <button>
        <a href="/article5">Article5</a>
      </button>
      <button>
        <a href="/article6">Article6</a>
      </button>
    
    </div>
  );
}


/*
const ImageColumn = () => {
  // Replace these image URLs with the actual paths to your images
  const image1URL = 'pictures/articles_pic_1.jpeg';
  const image2URL = 'pictures/articles_pic_2.jpg';
  const image3URL = 'path/to/your/image3.jpg';

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ flex: 1 }}>
        <img src={image1URL} alt="Image 1" style={{ width: '100%', marginBottom: '10px' }} />
      </div>
      <div style={{ flex: 1 }}>
        <img src={image2URL} alt="Image 2" style={{ width: '100%', marginBottom: '10px' }} />
        <img src={image3URL} alt="Image 3" style={{ width: '100%' }} />
      </div>
    </div>
  );
};
*/
//export default ImageColumn;


export default Articles;