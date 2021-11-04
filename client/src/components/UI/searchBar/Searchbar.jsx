import React from 'react'
import searchIcon from '../../../assets/img/search-icon.png';
import '../../../global/index.scss';

const Searchbar = () => {
    return (
        <div className="w-1/4 ml-auto">
            <label className="flex w-full">
                <input type="search" className="border-2 border-white-200 outline-none h-h40 border-r-0 w-full flex-1 px-8 text-blue text-sm focus:border-pink duration-300"/>
                <button className="w-w50 h-h40 bg-pink text-white-100 flex items-center justify-center flex-grow-0">
                    <img src={searchIcon} alt="icon" />
                </button>
            </label>
        </div>
    )
}

export default Searchbar
