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

  function handleDeleteComic(id) {
    const updatedComicsArray = comics.filter((comic) => comic.id !== id);
    setComics(updatedComicsArray);
  }

  function handleUpdateComic(updatedComic) {
    const updatedComicsArray = comics.map((comic) => {
      if (comic.id === updatedComic.id) {
        return updatedComic;
      } else {
        return comic;
      }
    });
    setComics(updatedComicsArray);
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
        comics={displayedComics}
        handleDeleteComic={handleDeleteComic}
        handleUpdateComic={handleUpdateComic} />
        
    </div>
  );
};

export default App;
