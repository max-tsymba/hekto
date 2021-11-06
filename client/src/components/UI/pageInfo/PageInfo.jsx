import React from 'react'
import { useLocation } from 'react-router'
import { PAGE_NAMES } from '../../../utils/consts';

const PageInfo = () => {
    const location = useLocation();

    function getPageName() {
        
        let pageName = null;

        PAGE_NAMES.forEach(item => {
            if(item.toLowerCase().indexOf(location.pathname.slice(1)) > -1 && location.pathname != '/')
                pageName = item;
        });
        return pageName;
    }

    return (
        <div className="bg-white-600 min-h-280 flex items-center">
            <div className="container">
                <h1 className="font-default font-bold leading-12 text-xl text-blue-200">{getPageName()}</h1>
                <p className="font-lato text-pink text-sm leading-17">Best Furniture For Your Castle....</p>
            </div>
        </div>
    )
}

export default PageInfo
