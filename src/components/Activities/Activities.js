import React, { useEffect, useState } from 'react';
import Activity from '../Acivity.js/Activity';
import './Activites.css'

const Activities = () => {

    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    return (
        <div className='shop-continer'>
            <div className="continer-products">

                {
                    activities.map(activity => <Activity activity={activity} key={activity.id}></Activity>)
                }
            </div>
            <div className="continer-cart">
                <h1>Details</h1>
            </div>
        </div>
    );
};

export default Activities;