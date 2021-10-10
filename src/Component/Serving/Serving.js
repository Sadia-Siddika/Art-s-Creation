import React from 'react';
import './Serving.css'

const Serving = (props) => {
    const { artist, course, courseFee, duration, artistImg } = props.serving;

    return (
        <div className="container my-3 p-3 rounded shadow">
            <div class="col">
                    <div className="card h-100">
                        <img className="card-img-top pictures" src={artistImg} alt="..."/>
                        <div className="text-start p-3 card-body bg-secondary">
                            <h5 className="card-text"><span className="fw-bold">Artist Name:</span> {artist}</h5>
                            <h5 className="card-title"><span className="fw-bold">Course Name:</span> {course}</h5> 
                            
                        <h5 className="card-title"><span className="fw-bold">Course Duration:</span> {duration}</h5>
                            <h5 className="card-title"><span className="fw-bold">Course Fee:</span> {courseFee}</h5>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-light fw-bold">Registration</button>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Serving;