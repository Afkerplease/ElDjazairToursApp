import React, { useState } from "react";
import "./Tour.scss";

const Tour = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const deleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="tour-page">
      <div className="tour-details">
        <img src="path_to_your_image.jpg" alt="Tour" className="tour-image" />
        <h1 className="tour-title">Amazing Tour</h1>
        <p className="tour-description">
          Explore the wonders of the world with our amazing tour. From scenic
          landscapes to cultural landmarks, this tour has it all.
        </p>
        <p className="tour-price">$999.99</p>
        <button className="book-button">Book Now</button>
      </div>
      <div className="comments-section">
        <h2>Comments</h2>
        <div className="comment-input">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button onClick={addComment}>Add Comment</button>
        </div>
        <ul className="comments-list">
          {comments.map((comment, index) => (
            <li key={index} className="comment">
              {comment}
              <button onClick={() => deleteComment(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tour;
