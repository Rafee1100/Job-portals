import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../App';

const JobApply = () => {
    const { id } = useParams()
    const [jobDes, setJobDes] = useState([])
    useEffect(() => {
        const url = `https://nameless-dusk-73584.herokuapp.com/job/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setJobDes(data))
    }, [id])

    const history=useHistory();
    const handleCheckout =()=>{
        const url = `/checkout/${id}`
        history.push(url)
    }


    const { postName, companyName, logo, jobDescription, location, jobType} = jobDes
    return (
        <div className="container text-center" style={{width:"550px"}}>
            <h4 className="mt-4">You are applying for the post below</h4>
            <div class="card border-success mb-3 mt-5">
                <div class="card-header bg-transparent border-success font-bold">{companyName}</div>
                <div class="card-body text-success">
                    <h5 class="card-title">{postName}</h5>
                    <p class="card-text">{jobDescription}</p>
                </div>
                <div class="card-footer bg-transparent border-success">{jobType} located in {location}</div>
            </div>
            <button className="toJob" onClick={()=>handleCheckout()} type="submit">Click to Proceed</button>
        </div>
    );
};

export default JobApply;