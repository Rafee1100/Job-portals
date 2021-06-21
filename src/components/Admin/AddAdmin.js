import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddAdmin = () => {
    const { handleSubmit } = useForm();
    const [email, setEmail] = useState()
    const onSubmit = data => {
        const adminData = {
            email: email,
        };
        const url = `http://localhost:8000/addadmin`;

        console.log(adminData)
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