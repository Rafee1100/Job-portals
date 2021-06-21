import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';
import './PaymentCard.css'
import Navbar from'../Home/Navbar/Navbar'


const PaymentCard = (props) => {
    const { name, email } = props.data;
    const [userSubscription, setUserSubscription] = useState(10)
    const stripe = useStripe();
    const elements = useElements();

    const handleChange = (e) => {
        if (e.target.name === 'subscription') {
            setUserSubscription(e.target.value)
        }
    }

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }


        const cardElement = elements.getElement(CardElement);


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        const getUserInfo = {
            name: name,
            email: email,
            userSubscription: userSubscription,
            payment: { ...paymentMethod }
        }

        console.log(getUserInfo)


        const url = `http://localhost:8000/addemployer`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(getUserInfo)
        })
            .then(res => console.log('server side response', res))
    };


    return (
        <div>
            <Navbar/>
        <div className="container">
            <h2>Join as an employer</h2>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" name="title" defaultValue={name} aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="text" class="form-control" name="title" defaultValue={email} aria-describedby="emailHelp" />
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Select a Subscription</label>
                    <select class="form-select" id="inputGroupSelect01" onChange={handleChange}>
                        <option selected>{setUserSubscription}</option>
                        <option value="1">{userSubscription}</option>
                        <option value="2">20</option>
                        <option value="3">30</option>
                    </select>
                </div>
                <CardElement />
                <button className="payment-btn" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
        </div>
    );
};
export default PaymentCard;