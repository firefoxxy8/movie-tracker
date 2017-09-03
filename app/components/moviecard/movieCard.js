import React from "react";

const MovieCard = ({
  title,
  id: movie_id,
  overview,
  backdrop_path,
  poster_path,
  release_date,
  vote_average,
  isFaved,
  handleFavorites
}) => {


  const favorited = isFaved ? 'favorited' : ''
  const btnText = isFaved ? 'Remove' : 'Add'
  console.log('btn Text', btnText)

  let backDrop = `https://image.tmdb.org/t/p/w500${poster_path}`

  const movie = {
    title,
    overview,
    movie_id,
    poster_path,
    release_date,
    vote_average,
    isFaved
  }

  return (
    <div className={`movie-card ${favorited}`}>
      <h5 className="movie-title">{title}</h5>
      <button onClick={() => handleFavorites(movie)}>{btnText}</button>
      <img className="movie-image" src={backDrop} alt="backdrop image" />
    </div>
  );
};

export default MovieCard;
