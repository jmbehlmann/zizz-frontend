import axios from 'axios'

export function PostsShow(props) {
  const updatePost = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onUpdatePost(props.post.id, params)
    console.log('updating post')
  }

  const destroyPost = () => {
    console.log('destroying post')
    props.onDestroyPost(props.post)
  }


  return (
    <div>
      <p>id: {props.post.id}</p>
      <p>Check it out!</p>
      <p>{props.post.title}</p>
      <p>{props.post.body}</p>
      <img src={props.post.image} />
      <p>{props.post.user_id}</p>

      <div>
        <form onSubmit={updatePost}>
          <p>Title: <input name="title" type="text" defaultValue={props.post.title} /></p>
          <p>Body: <input name="body" type="text" defaultValue={props.post.body} /></p>
          <p>Photo Url: <input name="image" type="text" defaultValue={props.post.image} /></p>
          <p>User ID: <input name="user_id" type="text" defaultValue={props.post.user_id} /></p>
          <button>Update this stuff</button>
        </form>
        <br />
        <br />
        <button onClick={destroyPost}>Destroy!!!</button>
      </div>


    </div>
  );
}
