import React from 'react'
import Post from '../../Components/Post/Post'

export default function Posts(props) {


    const posts = props.data.map(
        p => {
            return <Post
                key={p.id}
                title={p.title}
                author={p.author}
                id={p.id}
                setSelected={() => { props.setSelected(p.id) }}
                deletePost={() => { props.deletePost(p.id) }}
            />

        }

    )
    return posts
}
