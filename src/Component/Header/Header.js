import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <img className="rounded-circle" src={logo} alt="" />
                    <h1 className="text-light fw-bolder">Art's Creation</h1>
                    <div className="">
                        <div className="text-white fw-bold d-flex justify-content-around">
                            <Link className="text-decoration-none px-2" to="/home">Home</Link>
                            <Link className="text-decoration-none px-2" to="/about">About</Link>
                            <Link className="text-decoration-none px-2" to="/courses">Courses</Link>
                            <Link className="text-decoration-none px-2" to="/joinTrainer">Join Trainer</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;