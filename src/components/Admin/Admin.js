import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import ApproveCart from './ApproveCart'

const Admin = () => {
    const [jobData, setJobData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/approvejobs')
            .then(res => res.json())
            .then(data => setJobData(data))
    }, [])

    console.log(jobData)

    return (
        <div className="container text-center">
            <Navbar/>
            <h4>There are some job posts need to be approved</h4>
            <div className="job-area">

                {
                    jobData.map(approveJob => <ApproveCart approveJob={approveJob}></ApproveCart>)
                }

            </div>

        </div>
    );
};

export default Admin;