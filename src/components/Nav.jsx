import React from 'react'       /*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[rR]eact" }]*/


const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
                <li>
                    <a href='/projects'>Projects</a>
                </li>
                <li>
                    <a href='/style'>Style</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav