import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Jobs from '../../Jobs/Jobs';
import Reviews from '../../Reviews/Reviews';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Jobs/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;