import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="text-center bg-rose-900 py-6 mt-10">
            <h1 className="text-white text-2xl mb-4">&copy; 2024 Johana Oktavia Ramadhani</h1>
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                    <FaFacebook size={30} />
                </a>
                <a href="https://www.instagram.com/jhnaoktv_?igsh=ZmprcGJ2OHJmZTA4" 
                className="text-white hover:text-gray-400 transition duration-300">
                    <FaInstagram size={30} />
                </a>
                <a href="https://www.linkedin.com/in/johanaoktavia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                className="text-white hover:text-gray-400 transition duration-300">
                    <FaLinkedin size={30} />
                </a>
            </div>
            <p className="text-white text-sm opacity-70">Support by Doscom University 2024</p>
        </div>
    );
};

export default Footer;
