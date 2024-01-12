import axios from 'axios'

export function PostsNew(props) {
  const createPost = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    console.log(params)
    props.onPostCreate(params)
    console.log('creating post')
    event.target.reset()
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
