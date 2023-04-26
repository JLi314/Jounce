import API_KEY from "../key.js";

const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
};

document.getElementById("btn").addEventListener("click", async function () {
  getMovieData();
});

function getMovieID() {
  let movieID = parseInt(document.getElementById("nature_menu").value);
  return movieID;
}

async function getMovieData() {
  let movieData = await getTMDBData(
    `https://api.themoviedb.org/3/tv/${getMovieID()}?api_key=${API_KEY}&append_to_response=videos`
  );
  document.getElementById("poster").src =
    "https://image.tmdb.org/t/p/w500" + movieData.poster_path;
  document.getElementById("title").innerHTML = movieData.name;
  document.getElementById(
    "first_aired"
  ).innerHTML = `First Aired: ${movieData.first_air_date}`;
  document.getElementById(
    "number_of_episodes"
  ).innerHTML = `Number of Episodes: ${movieData.number_of_episodes}`;
  document.getElementById("overview").innerHTML =
    "Overview: " + movieData.overview;

  const trailer = document.getElementById("trailer");
  document.getElementById("trailer").width = "700";
  document.getElementById("trailer").height = "400";
  trailer.style.display = "block";
  document.getElementById("trailer").src =
    "https://www.youtube.com/embed/" +
    movieData.videos.results
      .filter((trailer) => trailer.type === "Trailer")
      .at(0).key;

  document.getElementById(
    "latest_episode"
  ).innerHTML = `Latest Episode: ${movieData.last_episode_to_air.name}`;

  document.getElementById(
    "latest_air_date"
  ).innerHTML = `Air Date: ${movieData.last_episode_to_air.air_date}`;

  document.getElementById(
    "latest_overview"
  ).innerHTML = `${movieData.last_episode_to_air.overview}`;
}
