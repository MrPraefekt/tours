import React from "react";
import Tour from "./Tour.jsx";

const Tours = ({ locations, setLocations }) => {
  console.log(locations);
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {locations.map((location) => {
          return <Tour {...{ ...location, setLocations }} key={location.id} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
