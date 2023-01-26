import "./Main.css";
import { useContext, useEffect } from "react";

import CustomCard from "../components/CustomCard";
import CustomSwiper from "../components/CustomSwiper";
import useHttp from "../hooks/use-http";
import { FetchContext } from "../context/FetchContext";

function Main() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [fetchedData, setFetchedData] = useContext(FetchContext);

  const objects = {};

  function transformData(dataObj, whichTypeOfData) {
    let data = [];

    if (whichTypeOfData === "movie" || whichTypeOfData === "comedyMovie") {

      data = dataObj.results.map((result) => {
        return {
          id: result.id,
          title: result.title,
          release_date: result.release_date,
          overview: result.overview,
          img_path:
            "https://image.tmdb.org/t/p/original" + result.poster_path,
          vote_average: result.vote_average,
        };
      });

    } else if (whichTypeOfData === "tv" || whichTypeOfData === "netflixOG") {

      data = dataObj.results.map((result) => {
        return {
          id: result.id,
          title: result.name,
          release_date: result.first_air_date,
          overview: result.overview,
          img_path:
            "https://image.tmdb.org/t/p/original" + result.poster_path,
          vote_average: result.vote_average,

        };
      });

    }
    objects[whichTypeOfData] = data;

  }

  const {
    isLoading: moviesIsLoading,
    error: moviesError,
    sendRequest: fetchPopularMovies,
  } = useHttp(
    "movie",
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    apiKey +
    "&sort_by=popularity.desc&language=en|de|es&with_original_language=en|de|es",
    transformData
  );

  const {
    isLoading: tvIsLoading,
    error: tvError,
    sendRequest: fetchPopularTV,
  } = useHttp(
    "tv",
    "https://api.themoviedb.org/3/discover/tv?api_key=" +
    apiKey +
    "&sort_by=popularity.desc&language=en|de|es&with_original_language=en|de|es",
    transformData
  );

  const {
    isLoading: netflixOGIsLoading,
    error: netflixOGError,
    sendRequest: fetchNetflixOG,
  } = useHttp(
    "netflixOG",
    "https://api.themoviedb.org/3/discover/tv?api_key=" +
    apiKey +
    "&with_networks=213",
    transformData
  );

  const {
    isLoading: comedyMoviesIsLoading,
    error: comedyMoviesError,
    sendRequest: fetchComedyMovies,
  } = useHttp(
    "comedyMovie",
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    apiKey +
    "&with_genres=35",
    transformData
  );

  useEffect(() => {
    // eslint-disable-next-line
    if (Object.keys(fetchedData).length === 0) {
      fetchNetflixOG();
      fetchPopularMovies();
      fetchPopularTV();
      fetchComedyMovies();

      setFetchedData(objects);
    }


  }, []);

  return (
    <div>
      <div className="swiper-area">
        {netflixOGError && <p>{netflixOGError.message}</p>}
        {netflixOGIsLoading && <p>Is Loading...</p>}
        {fetchedData["netflixOG"] && (
          <CustomSwiper topic="Netflix Originals TV Series">
            {fetchedData["netflixOG"].map((tv) => (
              <CustomCard
                key={tv.id}
                media={tv}
              ></CustomCard>
            ))}
          </CustomSwiper>

        )}

        {moviesError && <p>{moviesError.message}</p>}
        {moviesIsLoading && <p>Is Loading...</p>}
        {fetchedData["movie"] && (
          <CustomSwiper topic="Popular Movies">
            {fetchedData["movie"].map((movie) => (
              <CustomCard
                key={movie.id}
                media={movie}
              ></CustomCard>
            ))}
          </CustomSwiper>
        )}

        {tvError && <p>{tvError.message}</p>}
        {tvIsLoading && <p>Is Loading...</p>}
        {fetchedData["tv"] && (
          <CustomSwiper topic="Popular TV Series">
            {fetchedData["tv"].map((tv) => (
              <CustomCard
                key={tv.id}
                media={tv}
              ></CustomCard>
            ))}
          </CustomSwiper>
        )}

        {comedyMoviesError && <p>{comedyMoviesError.message}</p>}
        {comedyMoviesIsLoading && <p>Is Loading...</p>}
        {fetchedData["comedyMovie"] && (
          <CustomSwiper topic="Comedy Movies">
            {fetchedData["comedyMovie"].map((movie) => (
              <CustomCard
                key={movie.id}
                media={movie}
              ></CustomCard>
            ))}
          </CustomSwiper>
        )}


      </div>

    </div>
  );
}

export default Main;
