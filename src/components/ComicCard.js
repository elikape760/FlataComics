import {useState} from 'react'

function ComicCard({ comic }) {

  const [isInStock, setIsInStock] = useState(true);

  function handleToggleStock() {
    setIsInStock((isInStock) => !isInStock);
  }

  // function handleClick() {
  //   onComicClick(comic)onClick={handleClick}}
  
  return (
    <li >
      <h3>Title:{comic.title}</h3>
      <img src={comic.image} alt={comic.title}/>
      <p>Year Published:{comic.year_published}</p>
      <p>Publisher:{comic.publisher}</p>
      <p>Condition:{comic.condition}</p>
      <p>Super Hero:{comic.super_hero}</p>
      <p>Price:{comic.price}</p>
      <p>Seller ID:{comic.seller_id} </p>
      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}>
          Buy
        </button>
      ) : (
        <button onClick={handleToggleStock}>Sold Out</button>
      )}
    </li>
  );
}

export default ComicCard;