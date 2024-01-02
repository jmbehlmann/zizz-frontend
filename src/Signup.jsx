import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="name" type="text" placeholder="Name"/>
        </div>
        <div>
          <input name="email" type="email" placeholder="Email"/>
        </div>
        <div>
          <input name="password" type="password" placeholder="Password"/>
        </div>
        <div>
          <input name="password_confirmation" type="password" placeholder="Password confirmation"/>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
