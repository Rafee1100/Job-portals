import React from 'react';
import './JobCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const JobCart = (props) => {
    const { logo, postName, companyName, postedBy, location, jobType } = props.job
    return (
        <div class="card m-3" styel={{ width: "18rem" }}>
            <div>
                <img className="C-logo" src={logo} alt="" />
            </div>
            <div class="card-body text-dark">
                <h5 class="card-title">{postName}</h5>
                <h6 className="company-name">{companyName}</h6>
                <p class="card-text">{companyName} is looking for a {postName} for their fast growing software company.</p>
            </div>
            <div className="ps-3 row">
                <div className="col-md-4 d-flex">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p className="ms-2">{location}</p>
                </div>
                <div className="col-md-8">
                    <p className="ms-2 text-success text-bold">Posted By: {postedBy}</p>
                </div>
            </div>
        </div>
    );
};

export default JobCart;