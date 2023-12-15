// import './App.css'

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  )
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>Make a new post</h1>
      <form>
        <p>Title: <input type="text" /> </p>
        <p>Autor: <input type="text" /> </p>
        <p>Text: <input type="text" /> </p>
      </form>
    </div>
)
}

function PostsIndex(props) {
  console.log(props.posts)

  return(
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map(post => (
        <div key={post.id}>
          <h2>title: {post.title}</h2>
          <p>author: {post.author}</p>
          <img src={post.image_url} />
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2078</p>
    </footer>
  )
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "Post #1",
      author: "James",
      image_url: "https://cdn.britannica.com/13/100513-050-1DB2C84D/Tractor-loader.jpg",
      text: "texty text text"
    },
    {
      id: 2,
      title: "Post #1",
      author: "James",
      image_url: "https://moma.org/wp/inside_out/wp-content/uploads/2013/10/The-Apparition.jpg",
      text: "nice post right there!"
    },
    {
      id: 3,
      title: "Post #3",
      author: "James",
      image_url: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2013/07/2001_monolith.jpg",
      text: "nice post right here!"
    }
  ]
  return(
  <div>
    <PostsNew />
    <PostsIndex  posts={posts} />
  </div>
  )
}

function App() {

  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
