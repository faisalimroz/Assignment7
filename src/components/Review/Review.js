import React from 'react';
import './Review.css'

const Review = (props) => {
    const [name]=props.name
    return (
        <div>
            <div className='cruk'>
              
              <h1 className='name'>Name:{name} {'\n'}</h1>
              <button> click me</button>
            </div>
        </div>
    );
};

export default Review;