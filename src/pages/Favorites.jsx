import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { FavoritexContext } from "../store/Favorites/context";
import { Container } from "react-bootstrap";
import NewsCardList from "../components/NewsCardList";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";

export default function Favorites(){
    // extrag stateul global de stiri la favorite
    const {favoritesState} = useContext(FavoritexContext);
   const { news } = favoritesState;
   const [_, setLocalStorageState] = useLocalStorage(
    "favorites",
    favoritesState
   );
   useEffect(() => {
    setLocalStorageState(favoritesState);
   }, [favoritesState, setLocalStorageState]);

    return (
        <Layout>
            <Container className="my-5">
                <h1 className="mb-5 pt-3">Stirile tale favorite</h1>
                {news.length === 0 ? (
                    <p>Momentan nu ai stiri la favorite</p>
                ): ( 
                    <NewsCardList newsList={news}/>
                )}
            </Container>

        </Layout>
    )
}