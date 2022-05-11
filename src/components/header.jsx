import React, { Component } from 'react';
import Logo from '../assets/logo.png'

class Header extends Component {
    onChangeSearchText = (e) => {
        this.props.onChangeSearchText(e.target.value)
    }

    render() {
        return (
            <header>
                <div className='header-inner'>
                    <img src={Logo} alt="logo" height="100%"/>
                    <div className="search-area">
                        <input type="text" placeholder='Search...' onChange={this.onChangeSearchText} />
                        <button><i className="fas fa-search fa-xl"></i></button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;