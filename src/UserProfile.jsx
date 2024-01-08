import { useParams } from 'react-router-dom';

export function UserProfile({ users }) {
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
      {/* Display other user details as needed */}
    </div>
  );
}
