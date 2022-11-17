import React, { useRef, useState } from 'react'

export default function NewPost(props) {

    // const [title, setTitle] = useState("")
    // const [author, setAuthor] = useState("")
    // const [body, setBody] = useState("")

    const titleElement = useRef("")
    const authorElement = useRef("")
    const bodyElement = useRef("")

    const handleSubmit = (event) => {
        event.preventDefault();
        const post = {
            "title": titleElement.current?.value,
            "author": authorElement.current.value,
            "body": bodyElement.current.value
        }

        props.addPost(post)

    }




    return (
        <form onSubmit={handleSubmit} className="newPostForm">
            title: <input
                type="text"
                ref={titleElement}
            //onChange={(e) => setTitle(e.target.value)}
            ></input>
            author: <input
                type="text"
                ref={authorElement}
            //onChange={(e) => setAuthor(e.target.value)}
            ></input>
            body: <input
                type="text"
                ref={bodyElement}
            //onChange={(e) => setBody(e.target.value)}
            ></input>
            <br></br>
            <button type='submit'>addPost</button>
        </form>
    )
}
