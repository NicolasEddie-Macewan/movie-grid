import MovieCard from "./MovieCard.jsx";

export default function MovieGrid({ movies, addToWatchlist }) {
  return (
    <div className="grid">
        {/*
        TODO 16:
        Render MovieCard for each movie, you can use map
        Use key={movie.imdbID} and pass movie as a prop
        Also pass addToWatchlist={addToWatchlist}
        */} 
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} addToWatchlist={addToWatchlist} />
      ))}
    </div>
  );
}
