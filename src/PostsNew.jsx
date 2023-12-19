import axios from 'axios'

export function PostsNew() {

  const createPost = () => {
    console.log('creating post...')
    axios.post("http://localhost:3000/posts.json", {
      title: "Testing the title here"
    }).then(response => {
      console.log(response.data)
    })

  }

  return (
    <div id="posts-new">
      <h1>Make a new post</h1>
      <form>
        <p><input type="text" placeholder="Title" /> </p>
        <p><input type="text" placeholder="Author" /> </p>
        <p><input type="text" placeholder="Text" /> </p>
      </form>
      <button>Create new post</button>

    </div>
  );
}
