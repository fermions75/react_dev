import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
    const { favorites } = useMovieContext();
    console.log("Favorites:", favorites);

    if (favorites) {
        return (
            <div className='favorites'>
                <h1>Your Favorites</h1>
                <p>Here are your favorite movies:</p>
                <div className='movies-grid'>
                        {favorites.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                </div>
            </div>
        )
    }
    return <div className='favorites-empty'>
        <h1>Your Favorites</h1>
        <p>You have no favorite movies yet.</p>
        <p>Start adding some!</p>
    </div>
}

export default Favorite;