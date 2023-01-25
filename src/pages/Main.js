import "./Main.css";
import { useEffect, useState } from "react";

import CustomCard from "../components/CustomCard";
import CustomSwiper from "../components/CustomSwiper";
import useHttp from "../hooks/use-http";

function Main() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);

  function transformData(dataObj, whichTypeOfData) {
    if (whichTypeOfData === "movie") {
      setPopularMovies(
        dataObj.results.map((result) => {
          return {
            id: result.id,
            title: result.title,
            release_date: result.release_date,
            overview: result.overview,
            img_path:
              "https://image.tmdb.org/t/p/original" + result.poster_path,
            vote_average: result.vote_average,
          };
        })
      );
    } else if (whichTypeOfData === "tv") {
      setPopularTV(
        dataObj.results.map((result) => {
          return {
            id: result.id,
            title: result.name,
            release_date: result.first_air_date,
            overview: result.overview,
            img_path:
              "https://image.tmdb.org/t/p/original" + result.poster_path,
            vote_average: result.vote_average,

          };
        })
      );
    } else if (whichTypeOfData === "netflixOG") {
      setNetflixOriginals(
        dataObj.results.map((result) => {
          return {
            id: result.id,
            title: result.name,
            release_date: result.first_air_date,
            overview: result.overview,
            img_path:
              "https://image.tmdb.org/t/p/original" + result.poster_path,
            vote_average: result.vote_average,
          };
        })
      );
    } else if (whichTypeOfData === "comedyMovie") {
      setComedyMovies(
        dataObj.results.map((result) => {
          return {
            id: result.id,
            title: result.title,
            release_date: result.release_date,
            overview: result.overview,
            img_path:
              "https://image.tmdb.org/t/p/original" + result.poster_path,
            vote_average: result.vote_average,
          };
        })
      );
    }
    console.log(dataObj, whichTypeOfData);
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
    fetchNetflixOG();
    fetchPopularMovies();
    fetchPopularTV();
    fetchComedyMovies();
  }, []);

  return (
    <div>
      <div className="swiper-area">
        {netflixOGError && <p>{netflixOGError.message}</p>}
        {netflixOGIsLoading && <p>Is Loading...</p>}
        {netflixOriginals && (
          <CustomSwiper topic="Netflix Originals TV Series">
            {netflixOriginals.map((tv) => (
              <CustomCard
                key={tv.id}
                media={tv}
              ></CustomCard>
            ))}
          </CustomSwiper>
        )}

        {moviesError && <p>{moviesError.message}</p>}
        {moviesIsLoading && <p>Is Loading...</p>}
        {popularMovies && (
          <CustomSwiper topic="Popular Movies">
            {popularMovies.map((movie) => (
              <CustomCard
                key={movie.id}
                media={movie}
              ></CustomCard>
            ))}
          </CustomSwiper>
        )}

        {tvError && <p>{tvError.message}</p>}
        {tvIsLoading && <p>Is Loading...</p>}
        {popularTV && (
          <CustomSwiper topic="Popular TV Series">
            {popularTV.map((tv) => (
              <CustomCard
                key={tv.id}
                media={tv}
              ></CustomCard>
            ))}
          </CustomSwiper>
        )}

        {comedyMoviesError && <p>{comedyMoviesError.message}</p>}
        {comedyMoviesIsLoading && <p>Is Loading...</p>}
        {comedyMovies && (
          <CustomSwiper topic="Comedy Movies">
            {comedyMovies.map((movie) => (
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
