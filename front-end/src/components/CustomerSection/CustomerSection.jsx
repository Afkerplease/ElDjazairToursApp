import React from "react";
import "./customerSection.scss";
const reviews = [
  { name: "Amine Bensalem", rating: 5, comment: "Excellent service!" },
  {
    name: "Sarah Johnson",
    rating: 4,
    comment: "Very good, but there is room for improvement.",
  },
  { name: "John Doe", rating: 3, comment: "Average experience." },
  { name: "Jane Smith", rating: 5, comment: "Outstanding! Highly recommend." },
];
function CustomerSection() {
  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <div className="review" key={index}>
          <h3 className="review-name">{review.name}</h3>
          <div className="review-rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`star ${i < review.rating ? "filled" : ""}`}
              >
                ★
              </span>
            ))}
          </div>
          <p className="review-comment">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerSection;
