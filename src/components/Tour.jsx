import React from "react";
import { useState } from "react";

const Tour = ({ name, image, info, price, id, setLocations }) => {
  const [showMore, setShowMore] = useState(false);

  //Alternative wäre nicht den State sondern die Funktion zu übergeben.
  const removeTour = (id) => {
    setLocations((currentLocations) => {
      return currentLocations.filter((location) => location.id !== id);
    });
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {showMore ? info : info.substring(0, 150) + "..."}
          <button className="info-btn" onClick={() => setShowMore(!showMore)}>
            {!showMore ? "show more" : "show less"}
          </button>
        </p>
        <button
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Remove Tour
        </button>
      </div>
    </article>
  );
};

export default Tour;
