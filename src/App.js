import React, { useState } from 'react';
import './App.css';
import ArticleSearch from './ApiCall';
import MovieComponent from './MovieComponent';
import MovieForm from './insert';
import UpdateMovie from './Update';
import GymData from './Gym_data';

function App() {

  
    // const [showUpdateMovie, setShowUpdateMovie] = useState(false);
  
    // const toggleComponent = () => {
    //   setShowUpdateMovie(!showUpdateMovie);
    // };

    // const [showUpdateMovie2, setShowUpdateMovie2] = useState(false);
  
    // const toggleComponent2 = () => {
    //   setShowUpdateMovie2(!showUpdateMovie2);
    // };
  
  
   
  return (
    <div className=''>
      {/* <div>
        <MovieComponent/>
        <div className='pt-5'></div>
      </div>

      <div className='flex flex-row justify-evenly'>
        <div className=''>
          <button onClick={toggleComponent}>
            {showUpdateMovie ? 'Hide Update Movie' : 'Update Movie'}
          </button>
          {showUpdateMovie && <UpdateMovie />}
        </div>
        <div>
          <button onClick={toggleComponent2}>
            {showUpdateMovie2 ? 'Hide Insert Movie' : 'Insert Movie'}
          </button>
          {showUpdateMovie2 && <MovieForm />}
        </div>
      </div> */}
      <GymData/>
      
    </div>
  );
}

export default App;
