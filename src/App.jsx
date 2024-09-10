/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[rR]eact" }]*/
import React, { useEffect } from 'react'
import AppRouter from './AppRouter'
import { appName } from './config/config'

function App() {
    useEffect(() => {
        document.title = `${ appName }`
    }, [])

    return (
        <>
            <a href='#mainContent' className='screen-reader'>Skip to Content</a>
            <AppRouter />
        </>
    )
}

export default App