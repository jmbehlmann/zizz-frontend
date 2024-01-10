import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function formatCreatedAt(created_at) {
  const date = new Date(created_at);
  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'America/Chicago' // Set the appropriate timezone here
  };
  return date.toLocaleString('en-US', options);
}

export function PostsIndex(props) {
  const [usersMap, setUsersMap] = useState({});


  useEffect(() => {
    const uniqueUserIds = [...new Set(props.posts.map(post => post.user_id))];

    const fetchUserNames = async () => {
      const usersData = {};
      for (const userId of uniqueUserIds) {
        try {
          const response = await axios.get(`http://localhost:3000/users/${userId}`);
          usersData[userId] = response.data.name;
        } catch (error) {
          console.error(`Error fetching user data for ID ${userId}:`, error);
        }
      }
      setUsersMap(usersData);
    };

    fetchUserNames();
  }, [props.posts]);


  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map(post => (
        <div key={post.id}>
          <h4>{usersMap[post.user_id]} - </h4>
          <Link to={`./users/${post.user_id}`}>profile</Link>
          <p>{post.text}</p>
          <h6>{formatCreatedAt(post.created_at)}</h6>
          <button onClick={() => props.onShowPost(post)}>More nonsense</button>
        </div>
      ))}
    </div>
  );
}
