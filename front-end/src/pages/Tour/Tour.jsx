import React, { useState, useEffect } from "react";
import "./Tour.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Tour = () => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [tourData, setTourData] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  const tourid = useParams();

  // !! function to get the tour data
  async function getTourData() {
    const res = await fetch(`/api/v1/tours/${tourid.id}`);
    const data = await res.json();

    setTourData(data.data.tour);
  }
  //  !! function to get the tour comments
  async function getTourComment() {
    const res = await fetch(`/api/v1/reviews/${tourid.id}`);
    const data = await res.json();
    console.log(data.data);

    setComments(data.data);
  }
  //  !! function to add a comment
  async function addComments() {
    const res = await fetch(`/api/v1/reviews/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tour_id: tourid.id,
        user_id: currentUser._id,
        rating: 4,
        comment: newComment,
      }),
    });

    const data = await res.json();
    console.log(data);
  }
  useEffect(() => {
    getTourData();
    getTourComment();
  }, []);
  // !! function to delete a comment
  const deleteComment = async (id) => {
    try {
      const res = await fetch(`/api/v1/reviews/${id}`, {
        method: "DELETE",
      });
      const data = res.json();
      if ((data.success = false)) {
        // dispatch(deleteUserFailure(data));
        return;
      }
      // dispatch(deleteUserSuccess(data));
    } catch (error) {
      console.log(error);
    }
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
          <button onClick={addComments}>Add Comment</button>
        </div>
        <ul className="comments-list">
          {/* <li className="comment">{comments[0].comment}</li> */}
          {comments.map((comment, index) => (
            <li key={comment._id} className="comment">
              {comment.comment}
              <button onClick={() => deleteComment(comment._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tour;
