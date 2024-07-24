import React, { useState, useEffect } from "react";
import "./Tour.scss";
import { useParams } from "react-router-dom";

const Tour = () => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [tourData, setTourData] = useState([]);

  const tourid = useParams();
  console.log(tourid.id);

  async function getTourData() {
    const res = await fetch(`/api/v1/tours/${tourid.id}`);
    const data = await res.json();
    console.log(data);

    setTourData(data.data.tour);
  }
  console.log(tourData);
  useEffect(() => {
    getTourData();
  }, []);

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
        <img src={tourData.images} alt="Tour" className="tour-image" />
        <h1 className="tour-title"> {tourData.name} </h1>
        <p className="tour-description">{tourData.description}</p>
        <p className="tour-price"> {tourData.price} € </p>
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
