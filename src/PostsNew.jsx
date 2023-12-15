export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>Make a new post</h1>
      <form>
        <p><input type="text" placeholder="Title" /> </p>
        <p><input type="text" placeholder="Author" /> </p>
        <p><input type="text" placeholder="Text" /> </p>
      </form>
      <button>Create new post</button>
    </div>
  );
}
