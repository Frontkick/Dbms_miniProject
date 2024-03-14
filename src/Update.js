import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovie = () => {
  const [movieName, setMovieName] = useState('');
  const [movieData, setMovieData] = useState({
    release_year: '',
    genre: '',
    image_link: '',
    director: '',
    video_link: '',
    runtime_minutes: ''
  });

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/movies/${movieName}`, movieData);
      alert('Movie updated successfully');
    } catch (error) {
      console.error('Error updating movie:', error);
      alert('Error updating movie');
    }
  };

  useEffect(() => {
    // Fetch movie data by name when the component mounts
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/movies?name=${movieName}`);
        const movie = response.data[0]; // Assuming the API returns only one movie with the given name
        setMovieData({
          release_year: movie.release_year,
          genre: movie.genre,
          image_link: movie.image_link,
          director: movie.director,
          video_link: movie.video_link,
          runtime_minutes: movie.runtime_minutes
        });
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    if (movieName) {
      fetchMovieData();
    }
  }, [movieName]);

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Movie Name:
          <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
        </label>
        <br />
        <label>
          Release Year:
          <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' type="text" name="release_year" value={movieData.release_year} onChange={handleChange} />
        </label>
        <br />
        <label>
          Genre:
          <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' type="text" name="genre" value={movieData.genre} onChange={handleChange} />
        </label>
        <br />
        <label>
          Image Link:
          <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' type="text" name="image_link" value={movieData.image_link} onChange={handleChange} />
        </label>
        <br />
        <label>
          Director:
          <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' type="text" name="director" value={movieData.director} onChange={handleChange} />
        </label>
        <br />
        <label>
          Video Link:
          <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' type="text" name="video_link" value={movieData.video_link} onChange={handleChange} />
        </label>
        <br />
        <label>
          Runtime Minutes:
          <input className ='text-black ml-5 bg-gray-500 mt-5 border rounded-2xl' value={movieData.runtime_minutes} onChange={handleChange} />
        </label>
        <br />
        <button className='border border-white mt-5' type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
