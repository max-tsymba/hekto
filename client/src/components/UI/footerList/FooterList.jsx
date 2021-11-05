import React from 'react'

const FooterList = (props) => {
    return (
        <div>
            <h3 className="text-md leading-125 font-default text-black mb-42">
                {props.title}
            </h3>
            <ul className="-my-10">
                {
                    props.items.map((item, i) => {
                        return <li className="py-10" key={item.name}>
                            <a href={item.url} className="text-sm text-subtext leading-125 hover:text-opacity-80 duration-300">{item.name}</a>
                        </li>
                    })
                }
                
            </ul>
        </div>
    )
}

export default FooterList
