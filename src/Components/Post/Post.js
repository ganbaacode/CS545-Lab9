import React from 'react'

export default function Post(props) {
    return (
        <div className='Content' onClick={props.setSelected}>
            <h3>Title: {props.title}</h3>
            <div className='Field'>
                <p>id: {props.id}</p>
                <p>author: {props.author}</p>
                <button onClick={props.deletePost}>delete</button>

            </div>
        </div>
    )
}
