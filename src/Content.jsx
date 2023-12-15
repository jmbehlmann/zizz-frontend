import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";

export function Content() {
  let posts = [
    {
      id: 1,
      title: "Tractors",
      author: "James",
      image_url: "https://cdn.britannica.com/13/100513-050-1DB2C84D/Tractor-loader.jpg",
      text: "texty text text"
    },
    {
      id: 2,
      title: "Words",
      author: "James",
      image_url: "https://moma.org/wp/inside_out/wp-content/uploads/2013/10/The-Apparition.jpg",
      text: "nice post right there!"
    },
    {
      id: 3,
      title: "Monoliths",
      author: "James",
      image_url: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2013/07/2001_monolith.jpg",
      text: "nice post right here!"
    }
  ];
  return (
    <div>
      <PostsIndex posts={posts} />
      <PostsNew />
    </div>
  );
}
