import React from 'react'
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from 'react-icons/fa';
import Payment from '../../assets/payments.png';

import "./Footer.scss";


const Footer = () => {
    return <footer classsName="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit iusto aliquid quis eum sapiente perferendis unde sint, obcaecati voluptate nostrum temporibus deleniti voluptatibus assumenda veritatis ab rerum nulla inventore provident.</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-items">
                    <FaLocationArrow/>
                    <div className="info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
                <div className="c-items">
                    <FaMobileAlt/>
                    <div className="info">
                    Phone Number : +91 8956231245
                    </div>
                </div>
                <div className="c-items">
                    <FaEnvelope/>
                    <div className="info">
                    E-mail : dheerushop@gmail.com
                    </div>
                </div>

            </div>
            <div className="col">
                <div  className="title">Categeries</div>
                <span className="info">HeadePhones</span>
                <span className="info">Smart Watch</span>
                <span className="info">Blutooth spakers</span>
                <span className="info">Home Theater</span>
                <span className="info">Projecters</span>
                <span className="info">Air Buds</span>
            </div>
            <div className="col">
                <div  className="title">Pages</div>
                <span className="info">About Us</span>
                <span className="info">Contacts Us</span>
                <span className="info">Returns</span>
                <span className="info">Disclaimer</span>
                <span className="info">Term & Condition</span>
                <span className="info">Privacy Policy</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottombar-content">
                <div className="text">
                    Created By Dheeru Shop . 
                </div>
                <img src={Payment} className="img"alt="" />
            </div>
        </div>
    </footer>;
    
};

export default Footer;
