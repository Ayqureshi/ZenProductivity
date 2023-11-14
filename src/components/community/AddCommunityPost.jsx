import React, { useState } from 'react';
// import { doc, setDoc} from "firebase/firestore";
// import { db, firestore } from '../../firebase';
import { firestore } from "../../firebase";
// the page is routed at community/AddPost

const AddPostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    // Get current user
    // const user = auth().currentUser;

    const user = {
      username : "Something",
      uid : "323bd0e2bdb"
    }

    if (user) {
      const newPost = {
        title,
        content,
        dateCreated: firestore.FieldValue.serverTimestamp(),
        authorId: user.uid,
        amountOfReplies: 0,
        amountOfLikes: 0,
      };
      console.log(newPost);
      try {
        // const postRef = doc(); // Replace with a unique comment ID
        // setDoc(postRef, newPost);

      } catch (error) {
        console.error('Error adding post:', error);
      }
    } else {
      console.log('No user signed in!');
    }
  };

  return (
    <div>
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" onSubmit={handleSubmit()}>Add Post</button>
      </form>
    </div>
  );
};

export default AddPostPage;
//   /* Create a Post with title, content, dateCreated, authorId, 
//     amountOfReplies, amountOfLikes, and Replies  */
//   async function handleAddPost (title, content) {
//     if (user) {
//       const userId = user.uid;
//     }

//     const commentId = "comments";
//     const userId = "userTwo";
//     // const replyId = "333";
//     // Reference the comment document
//     const replyRef = collection(db, `comments/${commentId}/replies`);

//     console.log("Trying to reply with",newReplyText);

//     const replyData = {
//         text: newReplyText,
//         userId: userId,
//         timestamp: new Date(), // Use the current timestamp
//         likes: 0
//     };

//     await addDoc(replyRef, replyData);
//     setNewReplyText('');
// }