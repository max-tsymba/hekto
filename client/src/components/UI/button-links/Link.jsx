import React from 'react'

const Link = (props) => {
    return (
        <a href={props.url} className={"py-" + props.py + " px-" + props.px + " " + (props.classes == undefined ? '' : props.classes.join(" ")) + " bg-pink text-white-500 text-sm font-lato rounded-4 hover:opacity-90 duration-300 inline-block"}>
            {props.name}
        </a>
    )
}

export default Link
