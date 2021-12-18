import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const acMenuColor =(curr) =>{
        if(window.location.pathname === curr){
            return "#ff8243"
        }
    }
    return (
        <div className="main-header">
            <div className='header py-8 px-4 w-11/12 mx-auto'>
            <div className="header-logo text-5xl">
                <Link to="/">
                    Globe<span className='logospan'>Trotting</span>
                </Link>
            </div>
            <div className="main-menu">
                <nav className='menu'>
                <Link className='menu-list' to="/home" style={{backgroundColor : acMenuColor('/')||acMenuColor('/home')}}>Home</Link>
                    <Link className='menu-list' to="/about" style={{backgroundColor : acMenuColor('/about')}}>About</Link>
                    <Link className='menu-list' to="/shop" style={{backgroundColor : acMenuColor('/shop')}}>Shop</Link>
                    <Link className='menu-list' to="/blog" style={{backgroundColor : acMenuColor('/blog')}}>Blog</Link>
                </nav>
            </div>
        </div>
        </div>
        
    );
};

export default Header;