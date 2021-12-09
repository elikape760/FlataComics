import {useState} from 'react'
function MyComics({ handleNewComic }) {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [year_published, setYear_published] = useState('')
    const [publisher, setPublisher] = useState('')
    const [condition, setCondition] = useState('')
    const [super_hero, setSuper_hero] = useState('')
    const [price, setPrice] = useState('')

    const handlePost = () => {
        // e.preventDefault();


        fetch("http://localhost:9292/comics", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    title: title,
                    image: image,
                    year_published: year_published,
                    publisher: publisher,
                    condition: condition,
                    super_hero: super_hero,
                    price: price,
            }),
        })
            .then(r => r.json())
            .then(data => handleNewComic(data));
            
            // form reset
            setTitle("")
            setImage("")
            setYear_published("")
            setPublisher("")
            setCondition("")
            setSuper_hero("")
            setPrice("")

    }

    return (
        <div className="new-comic-form">
            <h2>New Comics</h2>
            <form onSubmit={handlePost}>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <input
                    type="text"
                    name="image"
                    placeholder="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                ></input>
                <input
                    type="text"
                    name="year_published"
                    placeholder="year_published"
                    value={year_published}
                    onChange={(e) => setYear_published(e.target.value)}
                ></input>
                <input
                    type="text"
                    name="publisher"
                    placeholder="publisher"
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                ></input>
                <input
                    type="text"
                    name="condition"
                    placeholder="condition"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                ></input>
                <input
                    type="text"
                    name="super_hero"
                    placeholder="super_hero"
                    value={super_hero}
                    onChange={(e) => setSuper_hero(e.target.value)}
                ></input>
                <input
                    type="text"
                    name="price"
                    placeholder="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                ></input>
                <button type="submit">Submit Comics</button>
            </form>
        </div>
    )
}


export default MyComics