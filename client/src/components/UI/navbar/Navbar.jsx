import React from 'react';
import logo from '../../../assets/img/logo.png';
import { HOME_ROUTE } from '../../../utils/consts';
import Nav from '../nav/Nav';

const Navbar = () => {
    return (
        <div className="bg-white py-22">
            <div className="container">
                <div className="flex items-center">
                    <a href={HOME_ROUTE} className="inline-block mr-86">
                        <img src={logo} alt="logo" />
                    </a>
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export default Navbar
