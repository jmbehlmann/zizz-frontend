import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import axios from "axios";


export function Content() {
  let posts = [];

  const handleIndexPosts = () => {
    console.log("in handle index posts");
    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data)
    })
  }

  return (
    <div>
      <PostsIndex posts={posts} />
      <PostsNew />
      <button onClick={handleIndexPosts}>Get posts from the api </button>
    </div>


  );


}
