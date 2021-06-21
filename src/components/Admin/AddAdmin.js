import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Home/Navbar/Navbar';

const AddAdmin = () => {
    const { handleSubmit } = useForm();
    const [email, setEmail] = useState()
    const onSubmit = data => {
        const adminData = {
            email: email,
        };
        const url = `https://nameless-dusk-73584.herokuapp.com/addadmin`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => console.log('server side response', res))
        alert("Admin has been added")
    };
    const handleChange = (e) => {
        if(e.target.name==="email"){
            setEmail(e.target.value)
        }
    }

    return (
        <div className="container">
            <Navbar/>
            <h5>Fill the form to add an admin</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="text" class="form-control" name="email" aria-describedby="emailHelp" onChange={handleChange} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddAdmin;