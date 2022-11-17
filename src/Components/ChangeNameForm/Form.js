import React, { useState } from 'react'
import './Form.css'

export default function Form(props) {

    const [id, setId] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setAuthor(name, id);
    }


    return (
        <form onSubmit={handleSubmit}>
            id: <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            ></input>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <button type='submit'>Change title</button>
        </form>
    )
}
