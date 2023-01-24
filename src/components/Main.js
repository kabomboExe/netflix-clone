import "./Main.css";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

import CustomCard from "./CustomCard";
import CustomSwiper from "./CustomSwiper";
import CustomHeader from "./CustomHeader";
import CustomVideoCard from "./CustomVideoCard";
import useHttp from "../hooks/use-http";
import { backgroundVideos } from "../data/backgroundVideos";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

function Main() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const videos = backgroundVideos;
  const [backgroundVideo, setBackgroundVideo] = useState({});
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
    setBackgroundVideo(videos[Math.floor(Math.random() * videos.length)]);
    // eslint-disable-next-line
    fetchNetflixOG();
    fetchPopularMovies();
    fetchPopularTV();
    fetchComedyMovies();
  }, [
    videos,
  ]);

  return (
    <div>
      <CustomHeader></CustomHeader>
      <div className="container_video">
        <ReactPlayer
          playing={true}
          width="100%"
          height="100%"
          muted={true}
          loop={true}
          url={backgroundVideo.url}
          className="video"
        ></ReactPlayer>
        <div className="video_overlay">
          <CustomVideoCard videoInfo={backgroundVideo}></CustomVideoCard>
        </div>
      </div>
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
      <footer>
        Made with{" "}
        <FavoriteRoundedIcon
          sx={{ color: "#ff0000", paddingLeft: 0.5, paddingRight: 0.5 }}
        />{" "}
        by Kai F.
      </footer>
    </div>
  );
}

export default Main;
