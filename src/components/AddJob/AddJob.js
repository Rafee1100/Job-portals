import React, { useContext, useEffect, useState } from 'react';
import './AddJob.css'
import axios from 'axios';
import { useForm } from "react-hook-form";
import Navbar from '../Home/Navbar/Navbar';
import { UserContext } from '../../App';


const AddJob = () => {

    const { handleSubmit } = useForm();
    const [logo, setLogo] = useState(null);
    const [jobTiltle, setJobTitle] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [jobDescription, setJobDescription] = useState(null);
    const [postedBy, setPostedBy] = useState(null);
    const [jobType, setJobType] = useState(null);
    const [location, setLocation] = useState(null);
    const [status,setStatus]= useState(null)
    const [loggedInUser]=useContext(UserContext)

    const onSubmit = data => {
        const jobData = {
            postName: jobTiltle,
            logo: logo,
            companyName: companyName,
            jobDescription: jobDescription,
            jobType: jobType,
            location: location,
            postedBy: postedBy,
            status:status
        };
        const url = `https://nameless-dusk-73584.herokuapp.com/addApproveJob`;

        console.log(jobData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
            .then(res => console.log('server side response', res))
            alert("Your Record is taken and waiting for admin approval")
    };

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.name === 'title') {
            setJobTitle(e.target.value)
        }
        if (e.target.name === 'company-name') {
            setCompanyName(e.target.value)
        }
        if (e.target.name === 'job-description') {
            setJobDescription(e.target.value)
        }
        if (e.target.name === 'location') {
            setLocation(e.target.value)
        }
        if (e.target.name === 'posted-by') {
            setPostedBy(e.target.value)
        }
        if (e.target.name === 'job-type') {
            setJobType(e.target.value)
        }
        if(e.target.name === 'status'){
            setStatus(e.target.defaultValue)
        }

    }

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const logoData = new FormData();
        logoData.set('key', '0182f1c3c47306082d45b8cb5e427478');
        logoData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            logoData)
            .then(function (response) {
                setLogo(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    // const [employerData,setEmployerData]=useState([]);
    // useEffect(()=>{
    //     fetch(`https://nameless-dusk-73584.herokuapp.com/employer`)
    //     .then(res=>res.json())
    //     .then(data=>setEmployerData(data))
    // },[])

    // let [jobCounter,setJobCounter]=useState(0)
    // for(let i=0;i<employerData.length;i++){
    //     if(employerData[i].email===loggedInUser.email){
    //         if(employerData[i].userSubscription==="Premium"){
    //             setJobCounter(30);
    //         }
    //         else if(employerData[i].userSubscription==="Standard"){
    //             setJobCounter(20);
    //         }
    //         else{
    //             setJobCounter(10)
    //         }
    //     }
    // }
    // console.log(jobCounter)

    return (
        <div >
            <Navbar />
            <h2 className="text-center">Add Job</h2>
            <div className="container p-4" style={{ backgroundColor: "#F4FDFB" }}>
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Job Title</label>
                            <input type="text" class="form-control" name="title" aria-describedby="emailHelp" onChange={handleChange} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Company Name</label>
                            <input type="text" class="form-control" name="company-name" aria-describedby="emailHelp" onChange={handleChange} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Job Description</label>
                            <input type="text" class="form-control" name="job-description" aria-describedby="emailHelp" onChange={handleChange} />
                        </div>
                        <div class="input-group mb-3">
                            <input type="file" class="form-control" id="inputGroupFile02" onChange={handleImageUpload} />
                            <label class="input-group-text" name="logo" for="inputGroupFile02">Upload</label>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Location</label>
                            <input type="text" class="form-control" name="location" aria-describedby="emailHelp" onChange={handleChange} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Posted By</label>
                            <input type="text" class="form-control" name="posted-by" aria-describedby="emailHelp" onChange={handleChange} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Job Type</label>
                            <input type="text" class="form-control" name="job-type" aria-describedby="emailHelp" onChange={handleChange} />
                        </div>
                        
                        <div class="mb-3">
                            <label for="disabledTextInput" class="form-label">Status</label>
                            <input type="text" id="disabledTextInput" name="status" class="form-control" defaultValue="Pending" disabled/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;