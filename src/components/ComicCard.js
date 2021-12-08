import { useState } from 'react'

function ComicCard({ comic, handleDeleteComic, handleUpdateComic }) {

  const [isInStock, setIsInStock] = useState(true);
  const initialPrice = isInStock ? comic.price : ""
  const [updatedPrice, setUpdatedprice] = useState(initialPrice);
  const [updatedSeller_id, setUpdatedseller_id] = useState('');


  function handleToggleSubmit(e) {
    e.preventDefault();

    setIsInStock((isInStock) => !isInStock);

    fetch(`http://localhost:9292/comics/${comic.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: updatedPrice,
        seller_id: updatedSeller_id
      }),
    })
      .then((r) => r.json())
      .then((updatedPrice) => {
        handleUpdateComic(updatedPrice);
        setUpdatedprice("")
        setUpdatedseller_id("")
      }
      )

  }


  function handleDeleteClick(e) {
    e.preventDefault()

    fetch(`http://localhost:9292/comics/${comic.id}`, {
      method: "DELETE",
    })
      .then((r => r.json()))
      .then(data => handleDeleteComic(data));

    handleDeleteComic(comic.id);
  }

  return (
    <li >
      <h3>Title:{comic.title}</h3>
      <img src={comic.image} alt={comic.title} />
      <p>Year Published:{comic.year_published}</p>
      <p>Publisher:{comic.publisher}</p>
      <p>Condition:{comic.condition}</p>
      <p>Super Hero:{comic.super_hero}</p>
      <p>Price:{comic.price}</p>
      <p>Seller ID:{comic.seller_id} </p>
      <form onSubmit={handleToggleSubmit}>
        {isInStock ? null : <input

          type="number"
          // step="0.01"
          placeholder="New Price"
          value={updatedPrice}
          onChange={(e) => setUpdatedprice(e.target.value)}
        ></input>}
        <input
          type="number"
          placeholder="seller_id"
          value={updatedSeller_id}
          onChange={(e) => setUpdatedseller_id(e.target.value)}>
        </input>
        {isInStock ? (
          <button className="primary" onClick={handleToggleSubmit}>Buy</button>
        ) : (
          <button onClick={handleToggleSubmit}>Sold Out</button>
        )}

        <button onClick={handleDeleteClick}>Delete comic</button>
      </form>

    </li>
  );
}

export default ComicCard;