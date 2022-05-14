import React, { useState } from 'react';
import Logo from '../assets/logo.png'

function Header (props){
    const [value, setValue] = useState('')

    const onSearchContent = () => {
        props.onSearchContent(value)
    }

    const onChangeSearchText = (e) => {
        setValue(e.target.value)
    }

    const onPressEnterKey = (e) => {
        if (e.keyCode === 13) {
            onSearchContent(value)
        }
    }

    return (
        <header>
            <div className='header-inner'>
                <img src={Logo} alt="logo" height="100%"/>
                <div className="search-area">
                    <input 
                      type="text" 
                      placeholder='Search...' 
                      onChange={onChangeSearchText} 
                      onKeyUp={onPressEnterKey}
                    />
                    <button onClick={onSearchContent}>
                        <i className="fas fa-search fa-xl"></i>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;