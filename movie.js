import API_KEY from "./key.js";

const getData = async (url) => {
  return (await axios.get(url)).data;
};

const movieData = await getData(
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_watch_monetization_types=flatrate&with_genres=99&with_keywords=9882`
);

let x=0;

console.log(movieData.results[x]);

document.getElementById("movieTitle").innerHTML = movieData.results[x].title;
document.getElementById("movieOverview").innerHTML =
  movieData.results[x].overview;
document.getElementById("moviePopularity").innerHTML =
  movieData.results[x].popularity;
document.getElementById("movieReleaseDate").innerHTML =
  movieData.results[x].release_date;
document.getElementById("movieId").innerHTML = movieData.results[x].id;
document.getElementById("movieOriginalLanguages").innerHTML =
  movieData.results[x].original_language;
  document.getElementById("movieVideo").innerHTML = movieData.results[x].video;
document.getElementById("movieVoteAverage").innerHTML =
  movieData.results[x].vote_average;
document.getElementById("movieVoteCount").innerHTML =
  movieData.results[x].vote_count;

const posterImg = document.createElement("img");
posterImg.src = `https://image.tmdb.org/t/p/original/${movieData.results[x].poster_path}`;
document.body.appendChild(posterImg);
posterImg.setAttribute("id", "poster-img");

const backdropImg = document.createElement("img");
backdropImg.src = `https://image.tmdb.org/t/p/original/${movieData.results[x].backdrop_path}`;
document.body.appendChild(backdropImg);
backdropImg.setAttribute('img', 'backdrop-img')