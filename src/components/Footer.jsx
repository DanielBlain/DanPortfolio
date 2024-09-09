import React from 'react'       /*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[rR]eact" }]*/

import { getYear }              from '../utilities/utilities'
import { author, authorQuote }  from '../config/config'

const Footer = () => {
    return (
        <footer>
            <a
                href='https://www.danjblain.dev'
                rel='noreferrer'
            >
                <p>
                    &copy; { getYear() } { author }
                </p>
            </a>
            <em>
                { authorQuote }
            </em>
        </footer>
    )
}

export default Footer