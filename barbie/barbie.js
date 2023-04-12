import API_KEY from "../key.js";

const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
};

document.getElementById("btn").addEventListener("click", async function () {
  getMovieData();
});

function getMovieID() {
  let movieID = parseInt(document.getElementById("menu").value);
  console.log(movieID);
  return movieID;
}

async function getMovieData() {
  let movieData = await getTMDBData(
    `https://api.themoviedb.org/3/movie/${getMovieID()}?api_key=${API_KEY}&append_to_response=videos`
  );
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
  document.getElementById("budget").innerHTML = `Budget: $${movieData.budget}` + "... but it's actually priceless!";
  document.getElementById("overview").innerHTML = "Overview: " + movieData.overview;

  document.getElementById("trailer").innerHTML = "EXCITED NOW??? Well, here's the trailer!"

  document.getElementById("trailer").addEventListener("click", fetchMovie);
  function fetchMovie() {
    const trailer = movieData.videos.results.filter((trailer) => trailer.type === "Trailer");
    !trailer.length
      ? alert("SIKE! You just got VECTORED, there are no trailers for this film!!!")
      : window.open(`https://www.youtube.com/watch?v=${trailer.at(0).key}`)
    // location.href = `https://www.youtube.com/watch?v=${trailer.at(0).key}`
  }
}
