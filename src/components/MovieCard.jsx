export default function MovieCard({ movie, addToWatchlist }) {
  const posterAvailable = movie.Poster && movie.Poster !== "N/A";

  return (
    <article className="card">
      {posterAvailable ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className="noPoster">No Poster</div>
      )}

      <div className="cardContent">
        {/* TODO 17:
            Render movie.Title in an h3 */}
        <h3>{movie.Title}</h3>

        {/* TODO 18:
            Render the year, type, and any other info you want to show in a p tag.
            Example idea:
            2005 – movie – rating – etc.. */}
        <p>Title: {movie.Title}</p>
        <p>Release year: {movie.Year}</p>

        {/* TODO 19:
            Add an "Add to Watchlist" button.
            When clicked, it should call addToWatchlist(movie).
        */}
        <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
      </div>
    </article>
  );
}
