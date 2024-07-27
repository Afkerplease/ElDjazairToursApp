import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

function StarRate({ setRating, rating }) {
  const [ratingValue, setRatingValue] = useState(rating);
  return (
    <Rating
      onClick={(e) => {
        setRating(e);
        setRatingValue(e);
      }}
      start={0}
      stop={5}
      initialRating={ratingValue}
      fullSymbol={<FaStar color="yellow" />}
      emptySymbol={<FaStar color="gray" />}
    />
  );
}

export default StarRate;
