import React from 'react';
import Banner from '../Banner/Banner';
import GetInTouch from '../GetIntouch/GetInTouch';
import ServicesHome from '../Services/ServicesHome';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <ServicesHome></ServicesHome>
            <GetInTouch></GetInTouch>
        </>
    );
};

export default Home;