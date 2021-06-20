import React, { useContext } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';
import { UserContext } from '../../App';

const stripePromise = loadStripe('pk_test_51IhbEkE5YvaDl7QHWlvyfKDwwV3TWxWqp5E3Xsuy37B4AnmMSSe9tBQbi8dE32Icriwag33KCzOaIkLtfumGx8Hl00Akt2PnmD');


const Payment = () => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <Elements stripe={stripePromise}>
            <PaymentCard data={loggedInUser}/>
        </Elements>
    );
};

export default Payment;