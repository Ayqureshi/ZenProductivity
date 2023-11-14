import React from 'react'
import 
import PropTypes from 'prop-types';
// import Tag from './Tag';
import './PostThumbnailStyles.css'

// Page that contains add community feature as well as header and footer components
function AddCommunityPost(props) {
  


  /* Create a Post with title, content, dateCreated, authorId, 
    amountOfReplies, amountOfLikes, and Replies  */
  async function handleAddPost (title, content) {
    if (user) {
      const userId = user.uid;

    }
    const commentId = "comments";
    const userId = "userTwo";
    // const replyId = "333";
    // Reference the comment document
    const replyRef = collection(db, `comments/${commentId}/replies`);

    console.log("Trying to reply with",newReplyText);

    const replyData = {
        text: newReplyText,
        userId: userId,
        timestamp: new Date(), // Use the current timestamp
        likes: 0
    };
    await addDoc(replyRef, replyData);
    setNewReplyText('');
}


    return (
        <div>

      </div>
    );
  }

  // Add prop types validation
  CommunityPost.propTypes = {
    profilePhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    replies: PropTypes.number.isRequired,
    timePosted: PropTypes.string.isRequired,
  };

export default AddCommunityPost