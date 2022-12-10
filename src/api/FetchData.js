const baseURL = "https://api.themoviedb.org/3/";
const apiKey = process.env.REACT_APP_API_KEY;

export function fetchPopularMedia2022(
  whichType,
  releaseParameter="",
  watchProvider = ""
) {
  let popularMovies2022 = [];
  let popularTVShows2022 = [];
  fetch(
    baseURL +
      "discover/" +
      whichType +
      "?api_key=" +
      apiKey +
      "&sort_by=popularity.desc&language=en|de|es&with_original_language=en|de|es" +
      releaseParameter +
      watchProvider
  )
    .then((response) => response.json())
    .then((json) => {
      //console.log(json);
      if (whichType == "movie") {
        popularMovies2022 = json.results.map((result) => {
          return {
            id: result.id,
            title: result.title,
            release_date: result.release_date,
            overview: result.overview,
            img_path: result.poster_path,
            vote_average: result.vote_average,
          };
        });
        console.log(popularMovies2022);
      } else {
        popularTVShows2022 = json.results.map((result) => {
          return {
            id: result.id,
            title: result.original_name,
            release_date: result.first_air_date,
            overview: result.overview,
            img_path: result.poster_path,
            vote_average: result.vote_average,
          };
        });
        console.log(popularTVShows2022);
      }
    })
    .catch((err) => console.log(err));
}

export function fetchTVWatchProviders() {
  let tvWatchProviders = [];
  fetch(baseURL + "watch/providers/tv?api_key=" + apiKey + "&language=en-US")
    .then((response) => response.json())
    .then((json) => {
      //console.log(json);
      tvWatchProviders = json.results.map((result) => {
        return {
          id: result.provider_id,
          logo: result.logo_path,
          name: result.provider_name,
        };
      });
      console.log(tvWatchProviders);
    })
    .catch((err) => console.log(err));
}
