import React, { useState, useEffect } from "react";
import "./Tour.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Tour = () => {
  const [newComment, setNewComment] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [comments, setComments] = useState([]);
  const [tourData, setTourData] = useState([]);
  const [rating, setRating] = useState(1);
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  console.log(comments);
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
        rating: rating,
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
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const clickHandlerBook = async () => {
    const res = await fetch(`/api/v1/booking/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser._id,
        tour_id: tourid.id,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="tour-page">
      <div className="tour-details">
        <img src={tourData.images} alt="Tour" className="tour-image" />
        <h1 className="tour-title"> {tourData.name} </h1>
        <p className="tour-description">{tourData.description}</p>
        <p className="tour-price"> Price:{tourData.price} € </p>
        <button
          style={{ display: `${!currentUser ? "none" : ""}` }}
          className="book-button"
          onClick={clickHandlerBook}
        >
          Book Now
        </button>
        {!currentUser && (
          <p className="booking__tour--text">
            {" "}
            in order to book a tour ,you have to create an account{" "}
          </p>
        )}
      </div>
      <div className="comments-section">
        <h2>Comments</h2>
        {currentUser && (
          <div className="comment-input">
            <input
              className="rating-input"
              min={1}
              max={5}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              type="number"
              placeholder=" give a rating from 1 to 5"
            />
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment"
            />
            <button onClick={addComments}>Add Comment</button>
          </div>
        )}
        <ul className="comments-list">
          {comments.map((comment, index) => (
            <div key={comment._id} className="comment__div">
              <h4>
                {comment.user_id.name}{" "}
                <span>gave a rating of {comment.rating}/5</span>{" "}
              </h4>
              <li key={comment._id} className="comment">
                {comment.comment}
                <button
                  style={{
                    display: `${
                      currentUser.name !== comment.user_id.name ? "none" : ""
                    }`,
                  }}
                  onClick={() => deleteComment(comment._id)}
                >
                  Delete
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tour;
