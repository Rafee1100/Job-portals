import React, { useEffect, useState } from 'react';
import { fakeData } from '../../FakeData';
import './Jobs.css'
import JobCart from '../JobCart/JobCart';

const Jobs = () => {
    const [jobs, setjobs] = useState([]);
    useEffect(() => {
        setjobs(fakeData)
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
                    jobs.map(job=><JobCart job={job}></JobCart>)
                }
            </div>
        </div>
    );
};

export default Jobs;