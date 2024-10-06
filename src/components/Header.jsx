import React from 'react'
import Nav from './Nav'


const Header = () => {
    return (
        <header>
            <h1>
                <span className='title-highlight'>
                    <a href='/'>
                        Dan J Blain
                    </a>
                </span>
            </h1>
            <Nav />
        </header>
    )
}

export default Header