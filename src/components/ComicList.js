import ComicCard from "./ComicCard";

function ComicList({ comics, displayedComics }) {
    return (
        <ul>
            {comics.map(comic =>
                <ComicCard
                    key={comic.id}
                    comic={comic}
                />)}
        </ul>
    );
};

export default ComicList

