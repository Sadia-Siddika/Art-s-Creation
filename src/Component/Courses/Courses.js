import React, { useEffect, useState } from 'react';
import Service from '../Serving/Serving';

const Courses = () => {
    const [servings, setServices] = useState([]);
    useEffect(() => {
        fetch('./FakeData.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className="container my-3 rounded">
            <h1 className="fw-bold">Our Courses</h1>
            <div className="row row-cols-1 row-cols-lg-3 g-4 p-3">
                {
                    servings.map(serving => <Service
                                key={serving.id}
                                serving={serving}
                            ></Service>)
                }
            </div>
        </div>
    );
};

export default Courses;