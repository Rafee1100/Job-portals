import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './CheckOutJob.css'

const CheckOut = () => {
    return (
        <div className="container google-btn d-flex flex-column applied">
           <FontAwesomeIcon className="mx-1 text-white bg-warning p-4 icon" size="6x" icon={faCheck} />
           <br/>
           <h2>Successfully Applied</h2>
        </div>
    );
};

export default CheckOut;