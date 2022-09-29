import React from 'react';
import './Charts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Charts = ({ carts }) => {
    let time = 0;
    for (const acitivty of carts) {
        time = parseFloat(time + acitivty.time);
    }
    const toastBtn = () => {
        toast("wow deleted form cart!");
    }
    return (
        <div>
            <div className='profile-continer'>
                <div className="me-4">
                    <img className='rounded-4 profile' src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=612x612&w=0&h=RqA2lYygvOxisNPp6UwFjz7bCw_rYITJMqFTMSrhpis=" alt="" />
                </div>
                <div>
                    <h5>Mohammad Imran</h5>
                    <p><FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon>  Kuala Lumpur</p>
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
                <button className="  rounded-circle btn-break border border-0" type="submit">20m</button>
                <button className="  rounded-circle btn-break border border-0" type="submit">20m</button>
                <button className="  rounded-circle btn-break border border-0" type="submit">20m</button>
                <button className="  rounded-circle btn-break border border-0" type="submit">20m</button>
            </div>
            <h3 className='ms-4 mt-4'>Activity Details</h3>
            <p className='ms-5 mt-3'>Activity Time:{time} </p><br />
            <p className='ms-5'>Break Time: </p>
            <button onClick={toastBtn} className='btn-cart-complited'>Activity Completed</button>
        </div>
    );
};

export default Charts;