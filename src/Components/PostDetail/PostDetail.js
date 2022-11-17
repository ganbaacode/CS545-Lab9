import React from 'react'

export default function PostDetail(props) {

    console.log(props)
    return (
        <div className='postDetail'>
            <h1>{props.data[0].title}</h1>
            <p>{props.data[0].author}</p>
            <p>This is the content in the post....</p>

            <div>
                <button className='editbtn'>edit</button>
                <button className='deletebtn'>delete</button>
            </div>
        </div>
    )
}
