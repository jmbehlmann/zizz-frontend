import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { PostsShow } from "./PostsShow"
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ProfileShow } from './ProfileShow';
import { About } from "./About";
import axios from "axios";
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'


export function Content() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleIndexPosts = () => {
    console.log("in handle index posts");
    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data)
      setPosts(response.data)
    })
  }

  const handlePostCreate = (params) => {
    console.log('handling post create')
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        const newPost = response.data
        setPosts([newPost, ...posts])
        if (location.pathname === "/posts/new") {
          navigate('/');
        }
    })
  }

  const handleUpdatePost = (id, params) => {
    console.log('handling update recipe')
    axios.patch("http://localhost:3000/posts/" + id + ".json", params).then(response => {
      console.log(response.data)
      setPosts(
        posts.map(post => {
          if (post.id === response.data.id) {
            return response.data
          } else {
            return post
          }
        })
      )
      closeModal()
    })
  }

  const handleDestroyPost = (post) => {
    console.log(post)
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then(response => {
      console.log(response.data)
      setPosts(posts.filter(p => p.id !== post.id))
      closeModal()
    })
  }

  const showModal = (post) => {
    console.log(post)
    setSelectedPost(post)
    setIsPostsShowVisible(true)
  }

  const closeModal = () => {
    console.log('close');
    setIsPostsShowVisible(false)
  }


useEffect(handleIndexPosts, []);

useEffect(() => {
    axios.get('http://localhost:3000/users.json').then(response => {
      setUsers(response.data);
    });
  }, []);



  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={
          <>
            <PostsNew onPostCreate={handlePostCreate} />
            <PostsIndex posts={posts} onShowPost={showModal} />
          </>
        } />
        <Route path="/posts/new" element={<PostsNew onPostCreate={handlePostCreate} />} />
        <Route path="/users/:userId" element={<ProfileShow users={users} />} />
      </Routes>
      <Modal show={isPostsShowVisible} onClose={closeModal}>
        <PostsShow post={selectedPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>

      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <PostsIndex posts={posts} onShowPost={showModal}/> */}
      {/* <PostsNew onPostCreate={handlePostCreate}/> */}
      {/* <LogoutLink /> */}

    </div>


  );


}
