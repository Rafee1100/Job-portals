import React, { useEffect, useState } from 'react';
import { fakeData } from '../../FakeData';
import './Jobs.css'
import JobCart from '../JobCart/JobCart';
import Navbar from '../Home/Navbar/Navbar';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    console.log(jobs)
    return (
            <div className="mt-4 pt-4 container">
                <div>
                    <h3 className="job-header">Employers want to meet qualified candidates</h3>
                    <p>Job Lagbe helps you meet them</p>
                </div>
                <div className="job-area">
                    {
                        jobs.map(job => <JobCart job={job} key={jobs._id}></JobCart>)
                    }
                </div>
            </div>
    );
};

export default Jobs;