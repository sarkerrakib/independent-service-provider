import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer text-center mt-5'>
            <p><small>Copyright &#169; {year} || JSR PhotoGraphy <br /> All rights reserved </small></p>
        </footer>
    );
};

export default Footer;