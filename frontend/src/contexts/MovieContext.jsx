import { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movie) => {
        setFavorites((prevFavorites) => {
            return [...prevFavorites, movie]; // Add new favorite
        });
    }

    const removeFavorite = (movieId) => {
        setFavorites((prevFavorites) => {
            return prevFavorites.filter(movie => movie.id !== movieId); // Remove favorite by ID
        });
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId); // Check if movie is a favorite
    }
    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    };
    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}

