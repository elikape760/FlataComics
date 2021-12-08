import { useState, useEffect } from "react";
import Header from "./Header";
import AddComics from "./AddComics";
import ComicList from "./ComicList";
import Search from "./Search"


function App() {
  const [comics, setComics] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:9292/comics')
      .then(resp => resp.json())
      .then(data => {
        setComics(data)

      });
  }, []);

  function handleNewComic(newComic) {
    const updatedComic = [newComic, ...comics];
    setComics(updatedComic);
  }

  const displayedComics = comics.filter((comic) => {
    return comic.super_hero.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <Header />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} />
      <AddComics
        handleNewComic={handleNewComic} />
      <ComicList
        comics={displayedComics} />
    </div>
  );
};

export default App;
