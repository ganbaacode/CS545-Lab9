import axios from "axios";
import { createContext, useEffect, useState } from "react"
import Form from "../../Components/ChangeNameForm/Form"
import NewPost from "../../Components/NewPost/NewPost";
import PostDetail from "../../Components/PostDetail/PostDetail";
import Posts from "../Posts/Posts"


export const MyContext = createContext(null);


export default function Dashboard() {

  const [selected, setSelected] = useState(0);
  const [_author, setAuthor] = useState(null);
  const [detail, setDetail] = useState([{}]);

  let [postState, setPostState] = useState(
    [
      { id: 1, title: "Happiness", author: "John" },
      { id: 2, title: "MIU", author: "Dean" },
      { id: 3, title: "Enjoy Life", author: "Jasmine" }
    ])



  const fetchPosts = () => {
    axios.get('http://localhost:8080/api/v1/posts')
      .then(response => {
        setPostState(response.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const deletePost = (id) => {
    axios.delete('http://localhost:8080/api/v1/posts/' + id)
      .then(response => {
        console.log(response)
        fetchPosts();
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const addPost = (post) => {
    console.log(post)
    axios.post('http://localhost:8080/api/v1/posts', post)
      .then(response => {
        console.log(response)

        fetchPosts();
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const changeAuthor = (myAuth, id) => {
    console.log(myAuth)
    axios.post('http://localhost:8080/api/v1/posts/changeAuthor/' + id + "/" + myAuth)

      .then(response => {
        console.log(response)
        fetchPosts();
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchPosts();
  }, [])






  const setSelectedHandler = (id) => {
    setSelected(id);
    setDetailHandler(id);
    console.log(id);
  }



  const setDetailHandler = (id) => {
    const detail = postState.filter(p => p.id == id);
    setDetail(detail)
  }


  return (
    <MyContext.Provider value={{ selected }}>
      <div className="Post">
        <Posts
          data={postState}
          setSelected={setSelectedHandler}
          deletePost={deletePost}
        />
      </div>

      <div className="FormCn">
        <Form setAuthor={changeAuthor} />
      </div>

      <div className="addPostContainer">

        <NewPost addPost={addPost} />
      </div>

      <div className="detailContainer">
        <PostDetail data={detail} />
      </div>
    </MyContext.Provider>
  )

}
