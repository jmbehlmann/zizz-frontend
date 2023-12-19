export function PostsShow(props) {
  return (
    <div>
      <p>Check it out!</p>
      <p>{props.post.title}</p>
      <p>{props.post.body}</p>
      <img src={props.post.image} />
      <p>{props.post.user_id}</p>
    </div>
  );
}
