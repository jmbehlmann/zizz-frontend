import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { PostsShow } from "./PostsShow"
import axios from "axios";
import { useState, useEffect } from 'react'
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleIndexPosts = () => {
    console.log("in handle index posts");
    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data)
      setPosts(response.data)
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



  return (
    <div>
      <PostsIndex posts={posts} onShowPost={showModal}/>
      <PostsNew />
      {/* <button onClick={handleIndexPosts}>Get posts from the api </button> */}

      <Modal show={isPostsShowVisible} onClose={closeModal}>
        <PostsShow post={selectedPost} />
      </Modal>

    </div>


  );


}
