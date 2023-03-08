import React from 'react'

export const Content = (props) => {

    return (
        <div>
            {props.res.map((item)=>{
                return <div>I love my {item}</div>
            })}
        </div>
    )
}