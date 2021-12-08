function Header() {
  return (
    <header id="header">
      <div id="navscroll">
      <h1>
        <span id="title"> FlataComics </span>
        <span className="logo" role="img">
        🦸‍♂️🦸‍♀️
        </span>
      </h1>
      {/* <div id="navbar">
      <Link to="/exercise" class="button">Exercises</Link>
      {"\n"}
      <Link to="/exercise/new" class="button">Add New Exercise</Link>
      {"\n"}
      <Link to="/exercise/new/my-list" class="button">My Exercise List</Link>
      </div> */}
      </div>
    </header>
  );
}
  
  export default Header;