import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const ApproveCart = (props) => {
    const { logo, postName, companyName, postedBy, location, _id, jobDescription, jobType } = props.approveJob
    console.log(props.approveJob)

    const deleteJob = (id) => {
        const url = `https://nameless-dusk-73584.herokuapp.com/deleteJob/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }

    const onSubmit = () => {
        const jobData = {
            postName: postName,
            logo: logo,
            companyName: companyName,
            jobDescription: jobDescription,
            jobType: jobType,
            location: location,
            postedBy: postedBy,
        };
        const url = `https://nameless-dusk-73584.herokuapp.com/addJob`;

        console.log(jobData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
            .then(res => console.log('server side response', res))
    };

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
            <div className="">
                <div className="ms-4d-flex">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p className="ms-2 mt-0">{location}</p>
                </div>
                <div className="apply-div">
                    <button type="submit" className="apply-btn" onClick={() => onSubmit()}>Aprove</button> &nbsp; &nbsp;
                    <button type="submit" className="btn-danger" onClick={() => deleteJob(_id)} style={{
                        border: "none",
                        padding: "8px 12px",
                        borderRadius:"8px"
                    }}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ApproveCart;