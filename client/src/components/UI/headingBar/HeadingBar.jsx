import React from 'react'
import HeadingBarButtons from '../headingBarButtons/HeadingBarButtons'
import HeadingBarLinks from '../headingBarLinks/HeadingBarLinks'

const HeadingBar = () => {
    return (
        <div className="bg-violet">
            <div className="container">
                <div className="py-10 flex">
                    <HeadingBarLinks />
                    <HeadingBarButtons />
                </div>
            </div>
        </div>
    )
}

export default HeadingBar
