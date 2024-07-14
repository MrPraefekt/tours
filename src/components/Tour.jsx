import React from 'react';

const Tour = ({name, image, info, price, id, setLocations}) => {
    const removeTour = (id) => {
        setLocations((currentLocations) => {
            return currentLocations.filter((location) => location.id !== id);
        })
    }
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p>{info}</p>
            <p>{price}</p>
            <button className='btn' onClick={() => removeTour(id)}>Remove Tour</button>
        </div>
    );
};

export default Tour;