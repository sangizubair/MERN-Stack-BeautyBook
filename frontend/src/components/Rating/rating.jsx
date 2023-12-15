// StarRating.js
import React from 'react';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`text-yellow-500 ${index < rating ? 'fill-current' : 'fill-none'}`}>
      &#9733;
    </span>
  ));

  return <div className="flex">{stars}</div>;
};

export default StarRating;
