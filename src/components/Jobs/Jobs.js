import React, { useEffect, useState } from 'react';
import './Jobs.css'
import JobCart from '../JobCart/JobCart';
import ReactPaginate from "react-paginate";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('http://localhost:8000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const usersPerPage = 20;
    const pagesVisited = pageNumber * usersPerPage;

    const pageCount = Math.ceil(jobs.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    console.log(jobs)
    return (
        <div className="mt-4 pt-4 container">
            <div>
                <h3 className="job-header">Employers want to meet qualified candidates</h3>
                <p>Job Lagbe helps you meet them</p>
            </div>
            <div>
                <div className="search-box"><input className="input-area" type="text"
                    placeholder="Search by post name"
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                /></div>
                
                <div className="job-area">
                    {
                         jobs.filter((val)=>{
                            if(searchTerm===""){
                                return val
                            }else if(val.postName.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val
                            }
        
                        }).slice(pagesVisited, pagesVisited + usersPerPage).map(job => <JobCart job={job} key={jobs._id}></JobCart>)
                    }
                </div>
                <div className="mt-5">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
                </div>
            </div>
        </div>
    );
};

export default Jobs;