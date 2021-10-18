import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GetInTouch.css';

const GetInTouch = () => {
    const [getInTouch, setGetInTouch] = useState([]);
    useEffect(() => {
        fetch('./healthcare.json')
            .then(res => res.json())
            .then(data => setGetInTouch(data.getInTouch))
    }, [])
    return (
        <div className="getintouch">
            {
                getInTouch.map(gtn => <>
                    <img src={gtn.cover} alt={gtn.title} />
                    <div>
                        <h3>{gtn.title}</h3>
                        <p>{gtn.subTitle}</p>
                        <Link className="link-btn" to="/contact">Quick touch</Link>
                    </div>
                </>)
            }
        </div>
    );
};

export default GetInTouch;