import React from 'react';
import './Charts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
const Charts = () => {
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
            <div className="d-flex mt-5 m-4 p-2 bg-secondary text-light rounded-3  justify-content-around">
                <div className="me-4">
                    <h2>65 kg</h2>
                    <p>Weight</p>
                </div>
                <div className="me-4">
                    <h2>5.8</h2>
                    <p>Height</p>
                </div>
                <div className="me-4">
                    <h2>25yrs</h2>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Charts;