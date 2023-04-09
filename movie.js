import API_KEY from "./key.js";

const getData = async (url) => {
  return (await axios.get(url)).data;
};

const movieData = await getData(
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_watch_monetization_types=flatrate&with_genres=99&with_keywords=9882`
);

console.log(movieData.results[0]);

document.getElementById("movieTitle").innerHTML = movieData.results[0].title;
document.getElementById("movieOverview").innerHTML =
  movieData.results[0].overview;
document.getElementById("moviePopularity").innerHTML =
  movieData.results[0].popularity;
document.getElementById("movieReleaseDate").innerHTML =
  movieData.results[0].release_date;
document.getElementById("movieId").innerHTML = movieData.results[0].id;
document.getElementById("movieOriginalLanguages").innerHTML =
  movieData.results[0].original_language;
document.getElementById("movieVideo").innerHTML = movieData.results[0].video;
document.getElementById("movieVoteAverage").innerHTML =
  movieData.results[0].vote_average;
document.getElementById("movieVoteCount").innerHTML =
  movieData.results[0].vote_count;

const posterImg = document.createElement("img");
posterImg.src = `https://image.tmdb.org/t/p/original/${movieData.results[0].poster_path}`;
document.body.appendChild(posterImg);
posterImg.setAttribute("id", "poster-img");

const backdropImg = document.createElement("img");
backdropImg.src = `https://image.tmdb.org/t/p/original/${movieData.results[0].backdrop_path}`;
document.body.appendChild(backdropImg);
backdropImg.setAttribute('img', 'backdrop-img')
