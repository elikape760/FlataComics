import { useState } from 'react'

import { Card, Icon, Image, Button, Input, Grid} from 'semantic-ui-react'

function ComicCard({ comic, handleDeleteComic, handleUpdateComic }) {

  const [isInStock, setIsInStock] = useState(true);
  const initialPrice = isInStock ? comic.price : ""
  const [updatedPrice, setUpdatedprice] = useState(initialPrice);
  const [updatedSellerId, setUpdatedsellerId] = useState('');
  const extra = (
    <a>
      <Icon name='user' />
      16 Friends
    </a>
  )
  const CardExampleCardProps = () => (
    <Card
      image='/images/avatar/large/elliot.jpg'
      header='Elliot Baker'
      meta='Friend'
      description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      extra={extra}
    />
  )


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
        // seller_id: updatedSeller_id
      }),
    })
      .then((r) => r.json())
      .then((updatedPrice) => {
        handleUpdateComic(updatedPrice);
        setUpdatedprice("")
        // setUpdatedsellerId("")
      }
      )

  }

  function handleSellerId(e) {
    e.preventDefault();

    setIsInStock((isInStock) => !isInStock);

    fetch(`http://localhost:9292/comics/${comic.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        seller_id: updatedSellerId
      }),
    })
      .then((r) => r.json())
      .then((updatedSellerId) => {
        handleUpdateComic(updatedSellerId);
        setUpdatedsellerId("")
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
   <Grid.Column>

   
    <Card id= "Card111">
        <Image src={comic.image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{comic.title}</Card.Header>
            <Card.Meta> Year Published: {comic.year_published}</Card.Meta>
            <Card.Description>
                {comic.super_hero}<br />
               Price: ${comic.price} <br />
               Publisher: {comic.publisher}
            </Card.Description>
        </Card.Content>
        
        <Card.Content extra>
            <a>
                <Icon name='user' />
                {comic.seller_id}
            </a>
            <br></br><br></br>
        <form onSubmit={handleToggleSubmit}>
      {isInStock ? 
      <Input
        focus placeholder='search'
        type="number"
        placeholder="New Price"
        value={updatedPrice}
        onChange={(e) => setUpdatedprice(e.target.value)}>
      </Input> 
      : 
      <Input
        focus placeholder='search'
        type="number"
        placeholder="seller ID"
        value={updatedSellerId}
        onChange={(e) => setUpdatedsellerId(e.target.value)}>
      </Input>}

      {isInStock ? (
        <Button primary onClick={handleToggleSubmit}>Purchase</Button>
        // <Button primary onClick={handleToggleSubmit}>Sell</button>
      ) : (
        <Button color='green' onClick={handleSellerId}>
          Sell Comic
          </Button>
        // <button onClick={handleSellerId}>Buy</button>
      )}

      <Button color = 'youtube' onClick={handleDeleteClick}>Delete comic</Button>
    </form>
        </Card.Content>
   
    </Card>
    </Grid.Column>
    
    























    // <CardLayout/>

    
  //   <Card>
  //     <li >
  //   <h3>Title:{comic.title}</h3>
  //   <img src={comic.image} alt={comic.title} />
  //   <p>Year Published:{comic.year_published}</p>
  //   <p>Publisher:{comic.publisher}</p>
  //   <p>Condition:{comic.condition}</p>
  //   <p>Super Hero:{comic.super_hero}</p>
  //   <p>Price:{comic.price}</p>
  //   <p>Seller ID:{comic.seller_id} </p>
  //   <form onSubmit={handleToggleSubmit}>
  //     {isInStock ? 
  //     <input
  //       type="number"
  //       // step="0.01"
  //       placeholder="New Price"
  //       value={updatedPrice}
  //       onChange={(e) => setUpdatedprice(e.target.value)}>
  //     </input> : <input
  //       type="number"
  //       placeholder="seller ID"
  //       value={updatedSellerId}
  //       onChange={(e) => setUpdatedsellerId(e.target.value)}>
  //     </input>}

  //     {isInStock ? (
  //       <button className="primary" onClick={handleToggleSubmit}>Sell</button>
  //     ) : (
  //       <button onClick={handleSellerId}>Buy</button>
  //     )}

  //     <button onClick={handleDeleteClick}>Delete comic</button>
  //   </form>

  // </li>
  // </Card>
    
  );
}


export default ComicCard;