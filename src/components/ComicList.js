import ComicCard from "./ComicCard";

function ComicList({ comics, handleDeleteComic, handleUpdateComic }) {
    return (
        <ul>
            {comics.map(comic =>
                <ComicCard
                    key={comic.id}
                    comic={comic}
                    handleDeleteComic={handleDeleteComic}
                    handleUpdateComic={handleUpdateComic}
                />)}
        </ul>
    );
};

export default ComicList

