import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css'

const Navbar = () => {
    const [loggedInUser] = useContext(UserContext)
    let isSignedInUser = false;
    if (loggedInUser.name) {
        isSignedInUser = true
    }
    const [isAdmin, setIsAdmin] = useState(false)
    const [isEmployer,setIsEmployer]=useState(false)
    const { photoURL } = loggedInUser

    useEffect(() => {
        fetch('https://nameless-dusk-73584.herokuapp.com/isadmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    useEffect(() => {
        fetch('https://nameless-dusk-73584.herokuapp.com/isemployer', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsEmployer(data));
    }, [])

    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/home"><img className="nav-img" src="https://cdn1.vectorstock.com/i/thumb-large/24/95/browse-job-logo-icon-design-vector-22742495.jpg" alt="" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item  me-3">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item me-3">
                                <Link class="nav-link" to="/jobs">Browse Job</Link>
                            </li>
                            <li class="nav-item me-3">
                                {
                                    isSignedInUser ? <Link className="mx-md-3 mx-auto text-white px-3 " to="/home"><img className="sign-in-image" src={photoURL} alt="" /></Link> :
                                        <Link className="nav-link" to="/Login">Login</Link>
                                }
                            </li>
                            <li class="nav-item me-3">
                                {
                                  isEmployer ? <Link to="/addjob" className="nav-link employer-btn" >For Employer</Link>:<Link className="nav-link employer-btn" to="/employer">For Employer</Link>
                                }
                            </li>
                            <li class="nav-item me-3">
                                {isAdmin ? <Link class="nav-link"  to="/admin">Admin Dashboard</Link>:null}
                            </li>
                            <li class="nav-item me-3">
                                {isAdmin ? <Link class="nav-link"  to="/addadmin">Add Admin</Link>:null}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;