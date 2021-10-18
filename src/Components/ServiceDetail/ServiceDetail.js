import React from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { id } = useParams();
    return (
        <div>
            services for {id}
        </div>
    );
};

export default ServiceDetail;