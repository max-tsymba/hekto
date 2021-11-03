import React from 'react'

const Svg = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox={addViewBox(props.width, props.height)} fill="none" xmlns="http://www.w3.org/2000/svg">
            {props.d.map((item, i) => <path d={item} fill="currentColor" key={i} />)}
        </svg>
    )
}

function addViewBox(width, height) {
    return `0 0 ${width} ${height}`;
}

export default Svg
