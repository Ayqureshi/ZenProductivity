import React, { useState } from 'react';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase';
import 'firebase/firestore';

const CommentPage = () => {
    // const [comments] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');
    const [newReplyText, setNewReplyText] = useState('');
    // const [selectedCommentId, setSelectedCommentId] = useState(null);

    /// Function to handle adding a new comment
    const handleAddComment = () => {

        if (newCommentText) {
            const commentData = {
                text: newCommentText,
                userId: 'user123', // Replace with the actual user ID
                timestamp: new Date(), // Use the current timestamp
                likes: 0,
            };

            console.log("Trying to comment with",newCommentText);

            // Create a new document for the comment in Firestore
            const commentRef = doc(db, 'comments', 'comment2'); // Replace with a unique comment ID
            setDoc(commentRef, commentData);

            setNewCommentText('');
        }
    };

    // Function to add a reply to a comment
    async function handleAddReply () {
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
        <div className="container mt-5">
            <h1 className="mb-4">Comments and Replies</h1>
            <div className="mb-4">
                <h2>Add Comment</h2>
                <textarea
                    className="form-control"
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="Enter your comment"
                />
                <button className="btn btn-primary mt-2" onClick={handleAddComment}>
                    Add Comment
                </button>
            </div>

            <div className="mb-4">
                <h2>Add Reply</h2>
                <textarea
                    className="form-control"
                    value={newReplyText}
                    onChange={(e) => setNewReplyText(e.target.value)}
                    placeholder="Enter your reply"
                />
                <button className="btn btn-primary mt-2" onClick={handleAddReply}>
                    Add Reply
                </button>
            </div>

            {/* <div>
                <h2>Comments</h2>
                {comments.map((comment) => (
                    <div key={comment.id} className="mb-3 p-3 border rounded">
                        <p className="mb-2">{comment.text}</p>
                        <button className="btn btn-secondary">
                            Add Reply
                        </button>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default CommentPage;