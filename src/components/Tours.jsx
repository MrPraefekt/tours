import React from 'react';
import Tour from "./Tour.jsx";

const Tours = ({locations, setLocations}) => {
    console.log(locations)
    return (
        <div>
            {locations.map((location) => {
                return <Tour {...{...location, setLocations}} key={location.id}/>
            })
            }
        </div>
    );
};

export default Tours;