import React from 'react'

const Button = (props) => {
    return (
        <button className={"py-" + props.py + " px-" + props.px + " " + (props.classes == undefined ? '' : props.classes.join(" ")) + " bg-pink text-white-500 text-sm font-lato rounded-4 leading-125 hover:opacity-90 duration-300"}>
            {props.name}
        </button>
    )
}

export default Button
