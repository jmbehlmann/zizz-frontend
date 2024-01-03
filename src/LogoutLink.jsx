import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div>
      <p>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </p>
    </div>

    // <div>
    //   <form onSubmit={handleSubmit}>

    //     </div>
    //     <button onClick={handleClick} type="submit">Log Out</button>
    //   </form>
    // </div>

  );
}
