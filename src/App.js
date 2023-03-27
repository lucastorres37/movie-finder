import { useState, useEffect } from "react"
import MovieCard from "./MovieCard"
import './App.css'
import SearchIcon from './search.svg'

// 39e0dde7

const API_URL = 'http://www.omdbapi.com?apikey=39e0dde7'

function App() {
	const [movies, setMovies] = useState([])
	const [search, setSearch] = useState('')

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`)
		const data = await response.json()

		setMovies(data.Search);
    }

	return (    
		<div className="app">
			<h1>
				Metflix
			</h1>

			<div className="search">
				<input 
					placeholder="Search for movies"
					value={search}
					onChange={(e) => setSearch(e.target.value)}				
				/>

				<img src={SearchIcon} alt="search" onClick={() => searchMovies(search)} />
			</div>

            {movies?.length > 0
				? (
					<div className="container">
						{movies.map((movie) => (
							<MovieCard movie={movie}/> 
						))}
					</div>
				) : (
					<div className="empty">
						<h2>No movies found</h2>
					</div>
				)}
		</div>
	);
}

export default App;
