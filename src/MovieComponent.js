import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from './test';

const MovieComponent = () => {
    const [movies, setMovies] = useState([]);
    const [selectedOption, setSelectedOption] = useState('name');
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            let endpoint = `http://localhost:5000/movies?${selectedOption}=${searchValue}`;
            // Modify endpoint for 'lang' option
            if (selectedOption === 'lang') {
                endpoint = `http://localhost:5000/movies/language/${searchValue}`;
            }
            const response = await axios.get(endpoint);
            setMovies(response.data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Fetch movies based on the selected option and the entered value
        fetchMovies();
    };

    return (
        <div>
            <h1 className='text-center text-5xl pb-5'>Movies</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="flex items-center justify-center">
                    <select className='text-black border m-2 rounded-xl' value={selectedOption} onChange={handleSelectChange}>
                        <option value="name">Title</option>
                        <option value="rating">Rating</option>
                        <option value="genre">Genre</option>
                        {/* Add language option */}
                        <option value="lang">Language</option>
                    </select>
                    <input className="border border-black rounded-xl text-black" type="text" value={searchValue} onChange={handleInputChange} />
                    <button className="mx-5 border border-black rounded-lg text-black bg-white" type="submit">Search</button>
                </div>
                <div>
                  
                </div>
              </div>
            </form>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.movie_id}>
                        <h2 className='text-4xl mb-1'>{movie.title}</h2>
                        <p className='mb-5'>{movie.release_year}</p>
                        <div className='flex flex-row'>
                        <img className="object-contain h-48 w-96 " src={movie.image_link} alt={movie.title} />
                        <VideoPlayer link={movie.video_link}/>
                        </div>
                        <div>
                          <p>Genre: {movie.genre}</p>
                        </div>
                        <p>Director: {movie.director}</p>
                        <p>Runtime: {movie.runtime_minutes} minutes</p>
                        <p>Cast: {movie.cast.join(', ')}</p>
                        <p>Rating: {(movie.rating*100)/100} / 10</p>
                        <p>Language: {movie.language}</p>
                        <div className='mt-10'></div>
                        <hr/>
                        <div className='mt-10'></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieComponent;
