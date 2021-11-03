import React from 'react'
import HeadingBarLinks from '../headingBarLinks/HeadingBarLinks'

const HeadingBar = () => {
    return (
        <div className="bg-violet">
            <div className="container">
                <div className="py-10">
                    <HeadingBarLinks />
                </div>
            </div>
        </div>
    )
}

export default HeadingBar
