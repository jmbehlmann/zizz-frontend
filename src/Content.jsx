import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import axios from "axios";
import { useState, useEffect } from 'react'

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    console.log("in handle index posts");
    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data)
      setPosts(response.data)
    })
  }

useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsIndex posts={posts} />
      <PostsNew />
      {/* <button onClick={handleIndexPosts}>Get posts from the api </button> */}
    </div>


  );


}
