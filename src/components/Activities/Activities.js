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

    const handleAddCart = (selectedactivity) => {
        let newCart = [];
        const exists = carts.find(activity => activity.id === selectedactivity.id);
        if (!exists) {
            selectedactivity.quantity = 1;
            newCart = [...carts, selectedactivity]
        }
        else {
            const rest = carts.filter(activity => activity.id !== selectedactivity.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        // local storage setting/
        addToDb(selectedactivity.id);
    }


    return (
        <div className='activity-continer '>
            <div className="continer-work">

                {
                    activities.map(activity => <Activity activity={activity} key={activity.id} handleAddCart={handleAddCart}></Activity>)
                }
            </div>
            <div className="continer-details bg-light">
                <Charts carts={carts}></Charts>
            </div>
        </div>
    );
};

export default Activities;