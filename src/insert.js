import React, { useState } from 'react';
import axios from 'axios';

function MovieForm() {
    const [movieData, setMovieData] = useState({
        title: '',
        release_year: '',
        genre: '',
        image_link: '',
        director: '',
        video_link: '',
        runtime_minutes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovieData({ ...movieData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/movies', movieData);
            alert('Movie inserted successfully');
            // Clear the form after successful insertion
            setMovieData({
                title: '',
                release_year: '',
                genre: '',
                image_link: '',
                director: '',
                video_link: '',
                runtime_minutes: ''
            });
        } catch (error) {
            alert('Failed to insert movie');
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Insert Movie</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' type="text" name="title" value={movieData.title} onChange={handleChange} required />
                <br />
                <label>Release Year:</label>
                <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' type="number" name="release_year" value={movieData.release_year} onChange={handleChange} required />
                <br />
                <label>Genre:</label>
                <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' type="text" name="genre" value={movieData.genre} onChange={handleChange} required />
                <br />
                <label>Image Link:</label>
                <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' type="text" name="image_link" value={movieData.image_link} onChange={handleChange} required />
                <br />
                <label>Director:</label>
                <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' type="text" name="director" value={movieData.director} onChange={handleChange} required />
                <br />
                <label>Video Link:</label>
                <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' type="text" name="video_link" value={movieData.video_link} onChange={handleChange} required />
                <br />
                <label>Runtime (minutes):</label>
                <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' type="number" name="runtime_minutes" value={movieData.runtime_minutes} onChange={handleChange} required />
                <br />
                <button className='border border-white mt-5' type="submit">Insert Movie</button>
            </form>
        </div>
    );
}

export default MovieForm;
