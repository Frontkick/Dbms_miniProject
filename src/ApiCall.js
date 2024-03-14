import React, { useState } from 'react';
import axios from 'axios';

function ArticleSearch() {
  const [loading, setLoading] = useState(false);
  const [hasResponse, setHasResponse] = useState(false);
  const [movies, setMovies] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [query, setQuery] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/movies?${selectedOption}=${query}`);
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }

  
  };

  return (
    <div className="article-search">
      {!hasResponse && (
        <>
          <h1 className="text-center mt-40 pt-40 text-5xl pb-5">Movie Search</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center">
              <select className='text-black border m-2 rounded-xl' value={selectedOption} onChange={handleSelectChange}>
                <option value="name">Title</option>
                <option value="genre">Genre</option>
                <option value="rating">Rating</option>
              </select>
              <input
                className="border border-black rounded-xl text-black"
                type="text" 
                value={query} 
                onChange={handleInputChange}
                placeholder="Search"
              />
              <button className="mx-5 border border-black rounded-lg text-black bg-white" type="submit">
                Search
              </button>
            </div>
          </form>

        </>
      )}
      
      {!loading && hasResponse && (
        <div className="search-results">
          {}
        </div>
      )}
    </div>
  );
}

export default ArticleSearch;
