import './css/App.css'
import MovieCard from './components/MovieCard'
import Favorite from './pages/Favorites';
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext';

function App() {
  const movieNumber = 1; // Example movie number, can be dynamic
  
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
      
  )
}

export default App
