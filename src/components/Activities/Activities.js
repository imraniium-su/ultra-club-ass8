import React, { useEffect, useState } from 'react';
import Activity from '../Acivity.js/Activity';
import Charts from '../Charts/Charts';
import './Activites.css'


const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [carts, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    const handleAddCart = (activity) => {
        const newCart = [...carts, activity];
        setCart(newCart);
    }

    return (
        <div className='shop-continer'>
            <div className="continer-products">

                {
                    activities.map(activity => <Activity activity={activity} key={activity.id} handleAddCart={handleAddCart}></Activity>)
                }
            </div>
            <div className="continer-cart bg-light">
                <Charts carts={carts}></Charts>
            </div>
        </div>
    );
};

export default Activities;