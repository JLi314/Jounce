import API_KEY from "./key.js";

const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
};

window.onload = () => {
  const box = document.createElement("div");
  box.id = "menu";
  document.body.appendChild(box);

  //appendchild span to div and add an event listener for the onclick, then assign value to it and trigger a function below to load the updated material in the same dom as the library by clearing it first.
};

//Create the drop down elements with js. Load each on click with span by changing a div down below

const createMovieTile = (id, poster, title, date, description) => {
  const tile = document.createElement("div");
  const details = document.createElement("div");
  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  // const count = document.createElement("count");

  tile.classList.add("tile");
  img.src = `https://image.tmdb.org/t/p/w500/${poster}`;
  h1.innerText = title;
  h3.innerText = date;
  h4.innerText = description;
  // count.innerText = 1;

  details.append(h1);
  details.append(h3);
  details.append(h4);
  // count.append(count);

  tile.append(img);
  tile.append(details);
  // tile.append(count);

  return tile;
};

let movieData = await getTMDBData(
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_watch_monetization_types=flatrate&with_genres=99&with_keywords=9882`
);
const movies = document.getElementById("movies");

movieData.results.forEach((movie) => {
  const tile = createMovieTile(
    movie.id,
    movie.poster_path,
    movie.title,
    movie.release_date,
    movie.overview
  );
  movies.appendChild(tile);
});
