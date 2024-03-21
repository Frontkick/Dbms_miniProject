import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trainer_table = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        fetchTrainers();
    }, []);



    const fetchTrainers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/trainers',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            setTrainers(response.data);
        } catch (error) {
            console.error('Error fetching trainers:', error);
        }
    };

    

    return (
        <div>

            <h2>Trainers Details</h2>
            <ul>
                {trainers.map((trainer, index) => (
                    <li key={index}>{trainer.first_name} {trainer.last_name}:    {trainer.trainer_id}</li>
                ))}
            </ul>

        </div>
    );
};

export default Trainer_table;
