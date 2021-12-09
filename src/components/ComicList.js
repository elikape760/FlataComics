import ComicCard from "./ComicCard";
import { Grid, Image } from 'semantic-ui-react'


function ComicList({ comics, handleDeleteComic, handleUpdateComic, sellerList}) {

    // const seller = sellers.map((seller) => {
    //     {seller.name}
    //   })
    return (
        
        <Grid  centered style={{width: "95%", margin: 'auto'}} columns={5}>  
            {comics.map(comic =>
                <ComicCard
                    key={comic.id}
                    comic={comic}
                    seller={sellerList}
                    handleDeleteComic={handleDeleteComic}
                    handleUpdateComic={handleUpdateComic}
                />)}
        </Grid> 
    );
};

export default ComicList

