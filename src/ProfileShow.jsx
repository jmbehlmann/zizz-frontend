import { useParams } from 'react-router-dom';

export function ProfileShow({ users }) {
  const { userId } = useParams();

  const user = users.find(user => user.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <button>Follow</button>
      <button>Unfollow</button>
      <p>show followers and following</p>
      <p>show all users posts</p>
    </div>
  );
}
