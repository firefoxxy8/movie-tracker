import React from "react";

const MovieCard = ({
  title,
  movie_id,
  overview,
  backdrop_path,
  poster_path,
  release_date,
  vote_average,
  isFaved,
  handleFavorites,
  user: user_id
}) => {


  const favorited = isFaved ? 'favorited' : ''
  const btnText = isFaved ? 'Remove' : 'Add'

  let backDrop = `https://image.tmdb.org/t/p/w500${poster_path}`

  const movie = {
    title,
    overview,
    movie_id,
    poster_path,
    release_date,
    vote_average,
    isFaved,
    user_id
  }

  return (
    <div className={`movie-card ${favorited}`}>
      <div className="info-hover">
        <p className="overview text">
          <span className="hover-section-title">Synopsis: </span>
          {overview}
        </p>
        <p className="additional-info text">
          <span className="hover-section-title">Release Date:</span>
          {release_date}
        </p>
        <p className="additional-info text">
          <span className="hover-section-title">Vote Average: </span>
          {vote_average} / 10
        </p>
      </div>
      <h5 className="movie-title">{title}</h5>
      <button onClick={() => handleFavorites(movie)}>{btnText}</button>
      <img className="movie-image" src={backDrop} alt="backdrop image" />
    </div>
  );
};

export default MovieCard;
