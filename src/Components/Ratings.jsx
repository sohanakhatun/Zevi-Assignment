
import React from "react";
import ReactStars from "react-stars";
const Ratings = ({ ratings }) => {
  return (
    <div>
      <ReactStars count={5} value={ratings}  size={24} color={"yellow"} />
    </div>
  );
};

export default Ratings;

