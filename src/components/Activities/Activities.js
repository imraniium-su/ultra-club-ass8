import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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
    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedactivity = activities.find(activity => activity.id === id);
            if (addedactivity) {
                const quantity = storedCart[id];
                addedactivity.quantity = quantity;
                saveCart.push(addedactivity);
            }
        }
        setCart(saveCart);
    }, [activities])

    const handleAddCart = (activity) => {
        const newCart = [...carts, activity];
        setCart(newCart);
        addToDb(activity.id);
    }


    return (
        <div className='shop-continer '>
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