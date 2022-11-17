import React, { useState } from 'react'

export default function NewPost(props) {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        const post = {
            "title": title,
            "author": author,
            "body": body
        }

        props.addPost(post)

    }




    return (
        <form onSubmit={handleSubmit} className="newPostForm">
            title: <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
            author: <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            ></input>
            body: <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></input>
            <br></br>
            <button type='submit'>addPost</button>
        </form>
    )
}
