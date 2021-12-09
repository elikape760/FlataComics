import { useState, useEffect } from "react";
import Header from "./Header";
import AddComics from "./AddComics";
import ComicList from "./ComicList";
import Search from "./Search"
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image } from 'semantic-ui-react'




function App() {
  const [comics, setComics] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [sellers, setSellers] = useState("")

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
  

    // useEffect(() => {
    //     fetch('http://localhost:9292/sellers')
    //       .then(resp => resp.json())
    //       .then(data => {
    //         setSellers(data)
    //       });
    //   }, [])
      
      // const sellerList = sellers.map((seller) => {
      //   return seller 
      // })


  return (
    <div id="image">
      <Header
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleNewComic={handleNewComic} />
      <ComicList
        // seller ={sellerList}
        comics={displayedComics}
        handleDeleteComic={handleDeleteComic}
        handleUpdateComic={handleUpdateComic} />
 
        
    </div>
  );
};

export default App;
