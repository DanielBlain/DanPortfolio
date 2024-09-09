import React from 'react'       /*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[rR]eact" }]*/
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import PageHome     from './pages/PageHome'
import PageAbout    from './pages/PageAbout'
import PageContact  from './pages/PageContact'
import PageProjects from './pages/PageProjects'
import PageStyle    from './pages/PageStyle'
import PageNotFound from './pages/PageNotFound'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Layout route */}
                <Route
                    element={
                        <>
                            <a href='#mainContent' className='screen-reader'>Skip to Content</a>
                            <div className='wrapper'>
                                <Header />
                                <main>
                                    <Outlet />
                                </main>
                                <Footer />
                            </div>
                        </>
                    }
                >
                    {/* Menued routes */}
                    <Route path='/'             element={<PageHome />}  exact   />
                    <Route path='/about'        element={<PageAbout />}         />
                    <Route path='/contact'      element={<PageContact />}       />
                    <Route path='/projects'     element={<PageProjects />}      />
                    <Route path='/style'        element={<PageStyle />}         />

                    {/* Failed to find route */}                    
                    <Route path='*'             element={<PageNotFound />}      />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter