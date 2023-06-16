import React from 'react';
import '../Welcome/Hero.css';
import student_store_icon from '/../images/student_store_icon.svg';

export default function WelcomeSection() {
    return (
        <div className="welcome-section">
            <div className="content">
                <div className="text-content">
                    <h1>Welcome!<br/> Find Your Merch!</h1>
                    <p>We have all kinds of goodies. Click on any of the items to start filling up your<br/>
                shopping cart. Checkout whenever you are ready.</p>
                </div>
                <div className="logo-container">
                    <img src={student_store_icon} alt="Shop Logo" />
                </div>
            </div>
        </div>
    )
}
