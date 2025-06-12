import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({movie}) {
    const {favorites, isFavorite, addFavorite, removeFavorite} = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active": ""}`} onClick={onFavoriteClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                </button>
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    </div>
}

export default MovieCard;