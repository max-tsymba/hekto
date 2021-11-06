import React from 'react'
import { useLocation } from 'react-router'
import HeadingBar from './UI/headingBar/HeadingBar'
import Navbar from './UI/navbar/Navbar'
import PageInfo from './UI/pageInfo/PageInfo'

const Header = () => {
    const location = useLocation();
    return (
        <header>
            <HeadingBar />
            <Navbar/>
            {location.pathname !== '/'
                && <PageInfo />
            }
        </header>
    )
}

export default Header
