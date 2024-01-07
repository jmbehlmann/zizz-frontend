import axios from 'axios';
import { useEffect, useState } from 'react';


export function PostsShow(props) {

  // const [userName, setUserName] = useState('');

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/users/${props.post.user_id}`)
  //     .then(response => {
  //       setUserName(response.data.name);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching user data:', error);
  //     });
  // }, [props.post.user_id]);

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
      <p>Buzz!</p>
      <p>{props.post.text}</p>
      <p>{props.post.user_id}</p>
      <p>{props.post.created_at}</p>
      {/* maybe add user name here eventually */}
      {/* <p>{userName}</p> */}

      <div>
        <form onSubmit={updatePost}>
          <p>Update Buzz: <input name="text" type="text" defaultValue={props.post.text} /></p>
          <button>Update this stuff</button>
        </form>
        <br />
        <button onClick={destroyPost}>Destroy!!!</button>
      </div>


    </div>
  );
}
