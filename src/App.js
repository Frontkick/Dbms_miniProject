import React, { useState } from 'react';
import './App.css';
import ArticleSearch from './ApiCall';
import MovieComponent from './MovieComponent';
import MovieForm from './insert';
import UpdateMovie from './Update';
import GymData from './Components/Gym_data';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Equipments from './Components/Gym_Equipments';
import InsertMembers from './Components/InsertMembers';
import MembersTable from './Merbership_type';
import Membership_price from './Components/Memebership_price';
import Trainer_table from './Components/Trainers';
import Update_Trainer from './Components/UpdaeTrainer';
import AllMembers from './AllMembers';
import InsertTrainer from './Components/Insert_Trainer';


function App() {

  
    const [showUpdateMovie, setShowUpdateMovie] = useState(false);
  
    const toggleComponent = () => {
      setShowUpdateMovie(!showUpdateMovie);
    };

    const [showUpdateMovie2, setShowUpdateMovie2] = useState(false);
  
    const toggleComponent2 = () => {
      setShowUpdateMovie2(!showUpdateMovie2);
    };
  
  
   
  return (
    <div className=''>
      <div>
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
      </div>

        // <Router>
        // <Navbar/>
        //     <Routes>
        //         <Route path="Equipments" element={<Equipments/>} />
        //         <Route path="/InsertMembers" element={<InsertMembers/>} />
        //         <Route
        //             path="/Members"
        //             element={<MembersTable/>}
        //         />
        //         <Route
        //             path="/price"
        //             element={<Membership_price/>}
        //         />
        //         <Route path="/trainers" element={<Trainer_table />} />
        //         <Route path="/updateTrainer" element={<Update_Trainer />} />
        //         <Route path="/allmembers" element={<AllMembers/>} />
        //         <Route path="/insertTrainer" element={<InsertTrainer/>}></Route>
                
        //     </Routes>
        // </Router>

      
    </div>
  );
}

export default App;
