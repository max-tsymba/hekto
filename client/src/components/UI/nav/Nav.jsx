import React from 'react'
import { useLocation } from 'react-router'
import { ABOUT_ROUTE, BLOGS_ROUTE, CONTACT_ROUTE, FAQ_ROUTE, HOME_ROUTE, SHOP_ROUTE } from '../../../utils/consts'


const Nav = () => {

    const location = useLocation();

    return (
        <nav>
            <ul className="font-lato flex -mx-18">
               <li className="px-18">
                   <a className={location.pathname === HOME_ROUTE ? "text-pink " : "text-blue " + "text-sm leading-125 hover:text-pink duration-300"} href={HOME_ROUTE}>Home</a>
                </li> 

                <li className="px-18">
                    <a className={location.pathname === ABOUT_ROUTE ? "text-pink " : "text-blue " + "text-sm leading-125 hover:text-pink duration-300"} href={ABOUT_ROUTE}>About</a>
                </li>

                <li className="px-18">
                    <a className={location.pathname === SHOP_ROUTE ? "text-pink " : "text-blue " + "text-sm leading-125 hover:text-pink duration-300"} href={SHOP_ROUTE}>Shop</a>
                </li>

                <li className="px-18">
                    <a className={location.pathname === BLOGS_ROUTE ? "text-pink " : "text-blue " + "text-sm leading-125 hover:text-pink duration-300"} href={BLOGS_ROUTE}>Blogs</a>
                </li>

                <li className="px-18">
                    <a className={location.pathname === CONTACT_ROUTE ? "text-pink " : "text-blue " + "text-sm leading-125 hover:text-pink duration-300"} href={CONTACT_ROUTE}>Contact</a>
                </li>

                <li className="px-18">
                    <a className={location.pathname === FAQ_ROUTE ? "text-pink " : "text-blue " + "text-sm leading-125 hover:text-pink duration-300"} href={FAQ_ROUTE}>FAQ</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
