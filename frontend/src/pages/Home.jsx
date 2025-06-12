import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css"; // Assuming you have a CSS file for styling
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                setError("Failed to fetch movies");
                console.error(err);
            } finally {
                setLoading(false);
            }
            
        };
        console.log("Fetching popular movies...");
        fetchMovies();
    }, []);

    const handleSearch = async (e) => {
        console.log("Search query:", searchQuery);
        e.preventDefault();
        if (!searchQuery.trim()) {
            console.log("Search query is empty, preventing search.");
            return;
        }
        if (loading) {
            console.log("Already loading, preventing new search.");
            return; // Prevent search if already loading
        }
        setLoading(true);
        try {
            const fetchSearchResults = async () => {
                const results = await searchMovies(searchQuery);
                console.log("Search results:", results);
                setMovies(results);
                if (results.length === 0) {
                    setError("No movies found for your search.");
                } else {
                    setError(null);
                }
            }
            await fetchSearchResults();
        } catch (err) {
            setError("Failed to search movies");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for a movie..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
        {loading && <p>Loading movies...</p>}
        {error && <p className="error-message">{error}</p>}
        <div className="movies-grid">
            {movies.map((movie) => 
                (
                    <MovieCard movie={movie} key={movie.id} />
                )
            )}
        </div>
    </div>
}

export default Home;