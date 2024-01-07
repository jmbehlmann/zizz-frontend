import axios from 'axios'

export function PostsNew() {
  const createPost = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      window.location.href = "/";
    })
  }

  return (
    <div id="posts-new">
      <h1>Make a new post</h1>
      <form onSubmit={createPost}>
        <p><input name="text" type="text" placeholder="Buzzzzzzz" /> </p>

        <button>Create new post</button>
      </form>

    </div>
  );
}
