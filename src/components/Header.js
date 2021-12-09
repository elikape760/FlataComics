import Search from './Search'
import AddComics from './AddComics'

function Header({ searchTerm, setSearchTerm, handleNewComic }) {
  return (
    <header id="header-main">
      <div id="navscroll">
        <h1>
          <span id="title"> FlataComics </span>
          <span className="logo" role="img">
            🦸‍♂️🦸‍♀️
          </span>
        </h1>
        {/* <img classname="image" src="https://i.pinimg.com/originals/a6/f0/b8/a6f0b85367e326777d56d91261cc585f.jpg" /> */}
      </div>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} />
      <AddComics
        handleNewComic={handleNewComic} />
    </header>
  );
}

export default Header;