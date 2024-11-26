import React from 'react';

function Business (business) {

    return (<div>
        <h1>{business.name}</h1>
        <img src={business.image} alt={business.name}/>
        <p>Address: {business.address}, {business.city}, {business.state}, {business.zipcode}</p>
        <p>Categpry: {business.category}</p>
        <p>Rating: {business.rating}/5</p>
        <p>Review: {business.review}</p>
        <p>Count: {business.count}</p>
    </div>)
};

export default Business;