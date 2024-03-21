import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Equipments = () => {
    
    const [gymEquipments, setGymEquipments] = useState([]);
    

    useEffect(() => {
        fetchGymEquipments();
        
    }, []);

    

   
       
    

   

    

    const fetchGymEquipments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/gym_equipments',{
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            
            );
            setGymEquipments(response.data);
        } catch (error) {
            console.error('Error fetching gym equipments:', error);
        }
    };
    


    return (
        <div className=' flex'>
            <div className=' '>
            <h2>Gym Equipments</h2>
            <ul className=''>
                {gymEquipments.map((equipment, index) => (
                    <li key={index}>{equipment.equipment_name} - Quantity: {equipment.quantity}</li>
                ))}
            </ul>
            </div>

        </div>
    );
};

export default Equipments;
