import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios"

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
    timeZone: 'America/Chicago'
  };
  return date.toLocaleString('en-US', options);
}


export function ProfileShow({ users }) {
  const { userId } = useParams();
  const profile = users.find(user => user.id === parseInt(userId));
  const [relationshipId, setRelationshipId] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const isFollowing = typeof relationshipId === 'number';


  const getRelationshipId = () => {
    console.log("getting relationship ID")
    axios.get("http://localhost:3000/relationships.json", {
      params: {
        leader_id: profile.id,
      },
    })
    .then((response) => {
      console.log(response.data)
      if (response.data.length !== 0) {
        setRelationshipId(response.data[0].id)
        // console.log(relationshipId)
      }
    })
  }

  const createRelationship = () => {
    console.log("create Relationship")
    axios.post("http://localhost:3000/relationships.json", {
      leader_id: profile.id,
    })
    .then((response) => {
      console.log("youre following")
      window.location.reload();
    })
  }

// should have a modal pop up that says you unfollowed user, click ok button, then redirect to home

  const destroyRelationship = () => {
    console.log("destroy relationship");
    axios.delete(`http://localhost:3000/relationships/${relationshipId}.json`)
    .then(() => {
      console.log("you unfollowed them")
      window.location.reload();
    })
  }

  const profilePostsIndex = () => {
    console.log("profilePostsIndex")
    axios.get(`http://localhost:3000/users/${profile.id}/posts.json`, {
      params: {
        user_id: profile.id,
      },
    })
    .then((response) => {
      console.log(response.data)
      setUserPosts(response.data)
    })
  }

  useEffect(() => {
    if (profile) {
      getRelationshipId();
      if (isFollowing) {
        profilePostsIndex();
      }
    }
  }, [profile, isFollowing]);

  console.log(relationshipId)
  console.log(isFollowing)



  return (
    <div>
      <h2>User Profile</h2>
      {profile ? (
        <>
          <p>User ID: {profile.id}</p>
          <p>Name: {profile.name}</p>
          <button onClick={createRelationship}>Follow</button>
          <button onClick={destroyRelationship}>Unfollow</button>
          <p>show followers and following</p>
          <p>show all users posts</p>
          {isFollowing && (
            <div id="user-posts-index">
              <h2>{profile.name}'s Posts</h2>
              {userPosts.map(userPost => (
                <div key={userPost.id}>
                  <p>{userPost.id}</p>
                  <p>{userPost.text}</p>
                  <p>-----------</p>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div>User not Found</div>
      )}
    </div>
  );
}

