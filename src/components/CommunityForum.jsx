import React, { useState } from 'react';

const CommunityForum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleNewPostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() === '') return;
    setPosts([...posts, newPost]);
    setNewPost('');
  };

  return (
    <div>
      <h2>Community Forum</h2>
      <form onSubmit={handleNewPostSubmit}>
        <input
          type="text"
          placeholder="Write a new post..."
          value={newPost}
          onChange={handleNewPostChange}
        />
        <button type="submit">Post</button>
      </form>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityForum;
