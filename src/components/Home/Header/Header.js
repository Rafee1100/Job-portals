import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Platform To <br /> Make A Bridge Between<br /> The Employer and Qualified job seeker</h1>
                        <p className="header-intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta perferendis sunt magnam odio, laudantium, eaque culpa temporibus animi, quisquam eum soluta obcaecati delectus. Temporibus.</p>
                        <button className="toJob" type=""><Link style={{textDecoration:"none"}} to="/jobs">Find Job</Link></button>
                    </div>

                    <div className="col-md-6 second-part">
                        <img className="header-img" src="https://image.freepik.com/free-vector/business-man-having-idea-innovation-idea-employee-vector-illustration_1212-957.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;