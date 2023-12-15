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

function PostsIndex() {
  return(
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="posts">
        <h2>Post #1</h2>
        <img src="https://cdn.britannica.com/13/100513-050-1DB2C84D/Tractor-loader.jpg" />
        <p>author: James</p>
        <p>texty text text</p>
        <button>read post</button>
      </div>
      <div className="posts">
        <h2>Post #2</h2>
        <img src="https://moma.org/wp/inside_out/wp-content/uploads/2013/10/The-Apparition.jpg" />
        <p>author: James</p>
        <p>nice post right here!</p>
        <button>read post</button>
      </div>
        <div className="posts">
        <h2>Post #3</h2>
        <img src="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2013/07/2001_monolith.jpg" />
        <p>author: James</p>
        <p>nice post right there!</p>
        <button>read post</button>
      </div>
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
  return(
  <div>
    <PostsNew />
    <PostsIndex />
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
