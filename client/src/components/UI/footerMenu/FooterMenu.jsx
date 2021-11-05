import React from 'react'
import { HOME_ROUTE } from '../../../utils/consts';
import logo from '../../../assets/img/logo-black.png';
import '../../../global/index.scss';
import FooterList from '../footerList/FooterList';
import Button from '../button/Button';

const FooterMenu = () => {
    return (
        <div className="bg-white-500 py-100">
            <div className="container">

                <div className="flex">
                    <div className="flex flex-col">
                        <a href={HOME_ROUTE} className="inline-block mr-86">
                            <img src={logo} alt="logo" />
                        </a>

                        <form action="#" className="max-w-380 mt-40 mb-26">
                            <label className="relative flex items-center bg-white py-2 px-2 rounded-4">
                                <input type="email" className="text-sm text-blue px-20 py-8 font-lato outline-none" placeholder="Enter email address"/>
                                <Button 
                                    name="Sign Up"
                                    py = "10"
                                    px = "40"
                                    classes = {[
                                        "ml-auto",
                                        "outline-none"
                                    ]}
                                />
                            </label>
                        </form>

                        <div className="font-lato text-sm leading-125 text-subtext">
                            <p>Contact info</p>
                            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                        </div>
                    </div>


                    <div className="flex space-x-86 ml-auto">
                        <FooterList 
                            title="Catagories"
                            items={[
                                {url: '#', name: 'Laptops & Computers'},
                                {url: '#', name: 'Cameras & Photography'},
                                {url: '#', name: 'Smart Phones & Tablets'},
                                {url: '#', name: 'Video Games & Consoles'},
                                {url: '#', name: 'Waterproof Headphones'},
                            ]}
                        />

                        <FooterList 
                            title="Customer Care"
                            items={[
                                {url: '#', name: 'My Account'},
                                {url: '#', name: 'Discount'},
                                {url: '#', name: 'Returns'},
                                {url: '#', name: 'Orders History'},
                                {url: '#', name: 'Order Tracking'},
                            ]}
                        />

                        <FooterList 
                            title="Pages"
                            items={[
                                {url: '#', name: 'Blog'},
                                {url: '#', name: 'Browse the Shop'},
                                {url: '#', name: 'Category'},
                                {url: '#', name: 'Pre-Built Pages'},
                                {url: '#', name: 'Visual Composer Elements'},
                                {url: '#', name: 'WooCommerce Pages'},
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMenu
