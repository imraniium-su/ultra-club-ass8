import React, { useEffect, useState } from 'react';
import './Charts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Swal from 'sweetalert2';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Charts = ({ carts }) => {
    const [value, setValue] = useState(0);
    let newtime = 0;
    const breakTime = (timebe) => {
        newtime = newtime + timebe;
        setValue(newtime);

        addToDb(timebe.newtime);
    };
    // useEffect(() => {
    //     const storedCart = getStoredCart()
    //     const saveCart = [];
    //     for (const id in storedCart) {

    //         const addedactivity = value.find(activity => activity.id === id);
    //         if (addedactivity) {
    //             const quantity = storedCart[id];
    //             addedactivity.quantity = quantity;
    //             saveCart.push(addedactivity);
    //         }
    //     }
    //     setValue(saveCart);
    // }, [])

    let time = 0;
    let quantity = 0;
    for (const acitivty of carts) {
        quantity = quantity + acitivty.quantity;
        time = parseFloat(time + acitivty.time * acitivty.quantity);
    }
    const toastBtn = () => {
        toast("WOW !! You done Your Activity! Have a nice day!!");
        // Swal.fire("Good job!", "You completed your activity!", "success");
    };

    return (
        <div className='details-continer'>
            <div className='profile-continer'>
                <div className="me-4">
                    <img className='rounded-4 profile' src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=612x612&w=0&h=RqA2lYygvOxisNPp6UwFjz7bCw_rYITJMqFTMSrhpis=" alt="" />
                </div>
                <div>
                    <h5>Mohammad Imran</h5>
                    <p>Data Engineeer , <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>  Kuala Lumpur</p>
                </div>
            </div>
            <div className="d-flex mt-5 m-3 p-2 bg-secondary text-light rounded-3  justify-content-around">
                <div className="me-4">
                    <h2>65 <span>kg</span></h2>
                    <p>Weight</p>
                </div>
                <div className="me-4">
                    <h2>5.8</h2>
                    <p>Height</p>
                </div>
                <div className="me-4">
                    <h2>25 <span>yrs</span></h2>
                    <p>Age</p>
                </div>
            </div>
            <h3 className='ms-4 mt-4'>Break Time</h3>
            <div className='btn-break-continer m-4 d-flex justify-content-around p-3'>
                <button onClick={() => breakTime(20)} className="  rounded-circle btn-break border border-0" type="submit">20m</button>
                <button onClick={() => breakTime(30)} className="  rounded-circle btn-break border border-0" type="submit">30m</button>
                <button onClick={() => breakTime(35)} className="  rounded-circle btn-break border border-0" type="submit">35m</button>
                <button onClick={() => breakTime(25)} className="  rounded-circle btn-break border border-0" type="submit">25m</button>
                <button onClick={() => breakTime(24)} className="  rounded-circle btn-break border border-0" type="submit">24m</button>
            </div>
            <h3 className='ms-4 mt-4'>Activity Details</h3>
            <p className='ms-5 mt-3'>Activity Time:{time} m </p><br />
            <p className='ms-5'>Break Time:{value} m </p>
            <button onClick={toastBtn} className='btn-cart-complited'>Activity Completed</button><ToastContainer />
        </div>
    );
};

export default Charts;