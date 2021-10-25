import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg'
import './Header_30.scss';

const Header_30 = () => {
    return (
        <div>
            <div className="header">
                <Link to="/" className="logo-container">
                    <Logo />
                </Link>
                <div className="options">
                    <Link to="/shop_30" className="option">Shop_30</Link>
                    <Link to="/contact_30" className="option">Contact_30</Link>
                    <Link to="/signin_30" className="option">Sign In_30</Link>
                </div>
            </div>
        </div>
    )
}

export default Header_30;