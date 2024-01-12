import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"

export function ProfileShow({ users }) {

  const [relationshipId, setRelationshipId] = useState([]);
  const { userId } = useParams();
  const profile = users.find(user => user.id === parseInt(userId));


  const getRelationshipId = () => {
    console.log("getting relationship ID")
    axios.get("http://localhost:3000/relationships.json", {
      params: {
        leader_id: profile.id,
      },
    })
      .then((response) =>{
        console.log(response.data)
        setRelationshipId(response.data[0].id)
      })
  }

  const createRelationship = () => {
    console.log("create Relationship")
    axios.post("http://localhost:3000/relationships.json", {
      leader_id: profile.id,
    })
      .then((response) => {
        console.log(response.data)
      })
  }

// should have a modal pop up that says you unfollowed user, click ok button, then redirect to home

  const destroyRelationship = () => {
    console.log("destroy relationship");
    axios.delete(`http://localhost:3000/relationships/${relationshipId}.json`)
    console.log("relationship destroyed")
  }

  if (!profile) {
    return <div>User not found</div>;
  } else {
    getRelationshipId();
  }



  console.log(relationshipId)

  // useEffect(getRelationshipId, [])

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {profile.id}</p>
      <p>Name: {profile.name}</p>
      <button onClick={createRelationship}>Follow</button>
      <button onClick={destroyRelationship}>Unfollow</button>
      <p>show followers and following</p>
      <p>show all users posts</p>
    </div>
  );
}
