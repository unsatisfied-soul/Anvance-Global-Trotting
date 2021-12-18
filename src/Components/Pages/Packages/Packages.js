import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Packages.css'
import Addpacakage from './Addpackage/Addpacakage';

AOS.init();
const Packages = () => {
    return (
        <>
            <div data-aos="fade-right" data-aos-duration="1000" className="heading py-24">
                <h2  className='heading text-center'>Explore The World</h2>
                <Addpacakage />
            </div>
        </>
    );
};

export default Packages;