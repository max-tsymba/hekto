import React from 'react'
import { HOME_ROUTE } from '../utils/consts'
import Link from './UI/button-links/Link'
import NotFoundImg from './UI/notFoundImg/notFoundImg'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center">
            <NotFoundImg />
            <h3 className="font-default font-bold text-md-s text-blue-300 leading-125 text-center mb-60">oops! The page you requested was not found!</h3>
            <Link 
                url = {HOME_ROUTE}
                name="Back to Home"
                py = "10"
                px = "30"
                classes = {[
                    "leading-16"
                ]}
            />
        </div>
    )
}

export default NotFound
