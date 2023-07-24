import React from 'react';
//import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {Link} from 'react-router-dom';

// Inside the Router component

function Articles() {
  return (
    <div>
      <h1>Article Page</h1>
      <button>
        <Link to="/articles/Article1">Article1</Link>
      </button>
      <button>
        <Link to="/articles/Article2">Article2</Link>
      </button>
      <button>
        <Link to="/articles/Article3">Article3</Link>
      </button>
      <button>
        <Link to="/articles/Article4">Article4</Link>
      </button>
      <button>
        <Link to="/articles/Article5">Article5</Link>
      </button>
      <button>
        <Link to="/articles/Article6">Article6</Link>
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
