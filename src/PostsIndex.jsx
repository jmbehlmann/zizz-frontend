import axios from 'axios';
import { useEffect, useState } from 'react';

export function PostsIndex(props) {
  const [usersMap, setUsersMap] = useState({});

  useEffect(() => {
    // Fetch user data for all unique user IDs
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
          <h4>{usersMap[post.user_id]} - {post.formatted_created_at}</h4>
          <p>{post.text}</p>
          <button onClick={() => props.onShowPost(post)}>More nonsense</button>
        </div>
      ))}
    </div>
  );
}
