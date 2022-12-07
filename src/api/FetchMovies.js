function FetchMovies() {
    const apiKey = process.env.REACT_APP_API_KEY;
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key="+apiKey
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      console.log(json.length);
    })
    .catch((err) => console.log(err));
}

export default FetchMovies;
