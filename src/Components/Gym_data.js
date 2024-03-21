import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GymData = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        trainer_id: ''
    });
    const [gymEquipments, setGymEquipments] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const [membershipPrices, setMembershipPrices] = useState([]);
    const [updateTrainerFormData, setUpdateTrainerFormData] = useState({
        first_name: '',
        last_name: '',
        new_trainer_id: ''
    });

    useEffect(() => {
        fetchGymEquipments();
        fetchTrainers();
        fetchMembershipPrices();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/insert_member', formData);
            console.log('Member details inserted successfully');
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                trainer_id: ''
            });
        } catch (error) {
            console.error('Error inserting member details:', error);
        }
    };

    const updateTrainerInMember = async (firstName, lastName, newTrainerId) => {
        try {
            await axios.put(`http://localhost:5000/update_trainer_in_member/${firstName}/${lastName}`, { trainer_id: newTrainerId });
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

    const fetchGymEquipments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/gym_equipments');
            setGymEquipments(response.data);
        } catch (error) {
            console.error('Error fetching gym equipments:', error);
        }
    };

    const fetchTrainers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/trainers');
            setTrainers(response.data);
        } catch (error) {
            console.error('Error fetching trainers:', error);
        }
    };

    const fetchMembershipPrices = async () => {
        try {
            const response = await axios.get('http://localhost:5000/membership_prices');
            setMembershipPrices(response.data);
        } catch (error) {
            console.error('Error fetching membership prices:', error);
        }
    };

    return (
        <div>
            <h2>Insert Member Details</h2>
            <form onSubmit={handleSubmit}>
                {/* Form inputs for member details */}
                <label>First Name:</label>
                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
                <br />
                <label>Last Name:</label>
                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
                <br />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <br />
                <label>Phone Number:</label>
                <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />
                <br />
                <label>Trainer ID:</label>
                <input type="text" name="trainer_id" value={formData.trainer_id} onChange={handleChange} />
                <br />
                <button type="submit">Submit</button>
            </form>

            <h2>Gym Equipments</h2>
            <ul>
                {gymEquipments.map((equipment, index) => (
                    <li key={index}>{equipment.equipment_name} - Quantity: {equipment.quantity}</li>
                ))}
            </ul>

            <h2>Trainers Details</h2>
            <ul>
                {trainers.map((trainer, index) => (
                    <li key={index}>{trainer.first_name} {trainer.last_name}</li>
                ))}
            </ul>

            <h2>Membership Prices</h2>
            <ul>
                {membershipPrices.map((price, index) => (
                    <li key={index}>{price.membership_name} - Price: {price.price}</li>
                ))}
            </ul>

            <h2>Update Trainer in Member</h2>
            <form onSubmit={handleUpdateTrainerSubmit}>
                <label>First Name:</label>
                <input type="text" name="first_name" value={updateTrainerFormData.first_name} onChange={handleUpdateTrainerInputChange} />
                <br />
                <label>Last Name:</label>
                <input type="text" name="last_name" value={updateTrainerFormData.last_name} onChange={handleUpdateTrainerInputChange} />
                <br />
                <label>New Trainer ID:</label>
                <input type="text" name="new_trainer_id" value={updateTrainerFormData.new_trainer_id} onChange={handleUpdateTrainerInputChange} />
                <br />
                <button type="submit">Update Trainer</button>
            </form>
        </div>
    );
};

export default GymData;
