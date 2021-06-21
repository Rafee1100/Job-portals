import React from 'react';
import './JobCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const JobCart = (props) => {
    const { logo, postName, companyName, postedBy, location,_id } = props.job
    const history = useHistory()

    const handleClick =(id)=>{
        const url=`/job/${id}`
        history.push(url)
    }

    return (
        <div class="card m-3" styel={{ width: "22rem" }}>
            <div>
                <img className="C-logo" src={logo} alt="" />
            </div>
            <div class="card-body text-dark">
                <h5 class="card-title">{postName}</h5>
                <h6 className="company-name">{companyName}</h6>
                <p class="card-text">{companyName} is looking for a {postName} for their fast growing software company.</p>
                <h6>Posted By: {postedBy}</h6>
            </div>
            <div className="ps-3 row">
                <div className="col-md-4 d-flex">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p className="ms-2 mt-0">{location}</p>
                </div>
                <div className="col-md-8 apply-div">
                    <button type="submit" className="apply-btn" onClick={()=>handleClick(_id)}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobCart;