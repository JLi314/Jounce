import API_KEY from "./key.js";

const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
};

document.getElementById("btn").addEventListener("click", function () {
  getMovieID();
  getMovieData();
});

function getMovieID() {
  let movieID = parseInt(document.getElementById("menu").value);
  console.log(movieID);
  return movieID;
}

console.log(getMovieID());

let movieData = await getTMDBData(
  `https://api.themoviedb.org/3/movie/${getMovieID()}?api_key=${API_KEY}&append_to_response=videos`
);

function getMovieData() {
  document.getElementById("poster").src =
    "https://image.tmdb.org/t/p/w500" + movieData.poster_path;
  document.getElementById("title").innerHTML = movieData.title;
  document.getElementById("tagline").innerHTML = movieData.tagline;
  document.getElementById(
    "status"
  ).innerHTML = `${movieData.status} ~ ${movieData.release_date}`;
  document.getElementById(
    "popularity"
  ).innerHTML = `Popularity: ${movieData.popularity}`;
  document.getElementById(
    "voteAverage"
  ).innerHTML = `Vote Average: ${movieData.vote_average}`;
  document.getElementById(
    "voteCount"
  ).innerHTML = `Vote Count: ${movieData.vote_count}`;
  document.getElementById("budget").innerHTML = `Budget: $${movieData.budget}`;
  document.getElementById("overview").innerHTML = movieData.overview;
  // document.getElementById("trailer").src =
  //   "https://www.youtube.com/embed/" +
  //   movieData.videos.results
  //     .filter((trailer) => trailer.type === "Trailer")
  //     .at(0).key;
    // document.getElementById("movieImage").style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${movieData.data.backdrop_path})`;

}

