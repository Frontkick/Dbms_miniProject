import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Update_Trainer = () => {
    const [updateTrainerFormData, setUpdateTrainerFormData] = useState({
        first_name: '',
        last_name: '',
        new_trainer_id: ''
    });


    const updateTrainerInMember = async (firstName, lastName, newTrainerId) => {
        try {
            await axios.put(`http://localhost:5000/update_trainer_in_member/${firstName}/${lastName}`, { trainer_id: newTrainerId },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Trainer ID updated successfully for the member');
        } catch (error) {
            console.error('Error updating trainer ID for member:', error);
        }
    };

    const handleUpdateTrainerInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateTrainerFormData({ ...updateTrainerFormData, [name]: value });
    };

    const handleUpdateTrainerSubmit = (e) => {
        e.preventDefault();
        updateTrainerInMember(updateTrainerFormData.first_name, updateTrainerFormData.last_name, updateTrainerFormData.new_trainer_id);
        setUpdateTrainerFormData({
            first_name: '',
            last_name: '',
            new_trainer_id: ''
        });
    };


    return (
        <div>
            <h2>Update Trainer in Member</h2>
            <form onSubmit={handleUpdateTrainerSubmit}>
                <label>First Name:</label>
                <input className='text-black mt-2 mb-2 border bg-slate-500 rounded-xl' type="text" name="first_name" value={updateTrainerFormData.first_name} onChange={handleUpdateTrainerInputChange} />
                <br />
                <label>Last Name:</label>
                <input className='text-black mb-2 border bg-slate-500 rounded-xl' type="text" name="last_name" value={updateTrainerFormData.last_name} onChange={handleUpdateTrainerInputChange} />
                <br />
                <label>New Trainer ID:</label>
                <input className='text-black mb-2 border bg-slate-500 rounded-xl' type="text" name="new_trainer_id" value={updateTrainerFormData.new_trainer_id} onChange={handleUpdateTrainerInputChange} />
                <br />
                <button className='border rounded-xl' type="submit">Update Trainer</button>
            </form>
        </div>
    );
};

export default Update_Trainer;
