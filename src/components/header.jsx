import React, { Component } from 'react';
import Logo from '../assets/logo.png'

class Header extends Component {
    render() {
        return (
            <header>
                <div className='header-inner'>
                    <img src={Logo} alt="logo" height="100%"/>
                </div>
            </header>
        );
    }
}

export default Header;