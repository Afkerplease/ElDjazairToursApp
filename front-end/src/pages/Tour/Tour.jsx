import React, { useState, useEffect } from "react";
import "./Tour.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import StarRate from "../../components/StarRate";

const Tour = () => {
  const [newComment, setNewComment] = useState("");

  const [comments, setComments] = useState([]);
  const [tourData, setTourData] = useState([]);
  const [message, setMessage] = useState("");

  const [rating, setRating] = useState(1);
  const { currentUser } = useSelector((state) => state.user);
  console.log(tourData);

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
      setComments(comments.filter((comment) => comment._id !== id));
      if ((data.success = false)) {
        return;
      }
    } catch (error) {}
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
    setMessage(data.message);
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
        {message && <p style={{ color: "green" }}> {message} </p>}
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
              type="text"
              required
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment"
            />
            <StarRate setRating={setRating} />
            <button onClick={addComments}>Add Comment</button>
          </div>
        )}
        <ul className="comments-list">
          {comments.map((comment, index) => (
            <div key={comment._id} className="comment__div">
              <h4>
                {comment.user_id.name} <StarRate rating={comment.rating} />
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
