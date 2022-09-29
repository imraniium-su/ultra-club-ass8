import React from 'react';
import './Activity.css'
const Activity = ({ handleAddCart, activity }) => {

    const { picture, age, time, name } = activity;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-details'>
                <h3 >{name}</h3>
                <p>Time :  {time}m</p>
                <p>Age: {age}</p>
            </div>
            <button onClick={() => handleAddCart(activity)} className='btn-cart'>Add me</button>
        </div>
    );
};

export default Activity;