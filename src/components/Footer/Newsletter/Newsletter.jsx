import React from 'react';
import { FaFacebookF , FaTwitter,FaInstagram,FaLinkedinIn} from 'react-icons/fa';
import "./Newsletter.scss";


const Newsletter = () => {
    return <div className="newslatter-section">
        <div className="newslatter-content">
            <span className="small-text">News Latter</span>
            <span className="big-text">Sing Up For Latest Update and Offers</span>
            <div className="form">
                <input type="text" placeholder='Email address' />
                <button>subscribe</button>
            </div>
            <div className="text">Will be use accordance With Our Privacy Policy</div>
            <div className="socil-icons">
                <div className="icon colorfb ">
                    <FaFacebookF size={14}/>
                </div>
                <div className="icon colortw">
                    <FaTwitter size={14}/>
                </div>
                <div className="icon coloris">
                    <FaInstagram size={14}/>
                </div>
                <div className="icon colorli">
                    <FaLinkedinIn size={14}/>
                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
