import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Banner from '../Banner/Banner';
import DoctorsQuotes from '../DoctorsQuotes/DoctorsQuotes';
import GetInTouch from '../GetIntouch/GetInTouch';
import ServicesHome from '../Services/ServicesHome';

const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return <div className="ctg-spinner">
            <Spinner animation="border" variant="info" />
        </div>
    }
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