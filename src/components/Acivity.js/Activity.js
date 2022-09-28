import React from 'react';
import './Activity.css'
const Activity = (props) => {
    console.log(props);
    const { picture, age, time, name } = props.activity;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-details'>
                <h3 >{name}</h3>
                <p>Time : {time}</p>
                <p>Age: {age}</p>
            </div>
            <button className='btn-cart'>Add me</button>
        </div>
    );
};

export default Activity;