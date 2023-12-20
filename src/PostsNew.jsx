import axios from 'axios'

export function PostsNew() {

  const createPost = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/posts.json", params).then(respone => {
      console.log(response.data)
      window.location.href = '/'
    })

  }

  return (
    <div id="posts-new">
      <h1>Make a new post</h1>
      <form onSubmit={createPost}>
        <p><input name="title" type="text" placeholder="Title" /> </p>
        <p><input name="user_id" type="text" placeholder="User ID" /> </p>
        <p><input name="body" type="text" placeholder="Text" /> </p>
        <p><input name="image" type="text" placeholder="Image URL" /> </p>
        <button>Create new post</button>
      </form>

    </div>
  );
}
