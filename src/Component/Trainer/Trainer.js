import React from 'react';

const Trainer = (props) => {
    const {artist, artistImg, services,courseFee} = props.trainer;
    return (
        <div className="container my-3 p-3 rounded shadow">
            <div class="col">
                <div className="card h-100">
                    <img className="card-img-top pictures" src={artistImg} alt="..."/>
                    <div className="card-body card footer bg-secondary">
                        <h5 className="card-title">{artist}</h5>
                        <h5 className="card-title">{services}</h5>
                        <h5 className="card-title">{courseFee}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainer;