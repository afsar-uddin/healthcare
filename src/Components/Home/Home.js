import React from 'react';
import Banner from '../Banner/Banner';
import DoctorsQuotes from '../DoctorsQuotes/DoctorsQuotes';
import GetInTouch from '../GetIntouch/GetInTouch';
import ServicesHome from '../Services/ServicesHome';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <ServicesHome></ServicesHome>
            <DoctorsQuotes></DoctorsQuotes>
            <GetInTouch></GetInTouch>
        </>
    );
};

export default Home;