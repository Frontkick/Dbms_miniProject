import React, { useState, useEffect } from 'react';
import Sort from './Sort';

function GymData() {
    const [members, setMembers] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const [equipment, setEquipment] = useState([]);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        membership_type: ''
    });

    useEffect(() => {
        fetchMembers();
        fetchTrainers();
        fetchEquipment();
    }, []);

    const fetchMembers = () => {
        fetch('http://localhost:5000/members')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setMembers(data.members);
                } else {
                    console.error(data.message);
                }
            })
            .catch(error => console.error('Error fetching members data:', error));
    };

    const fetchMembersByMembership = (membershipType) => {
        fetch(`http://localhost:5000/members/sort/${membershipType}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setMembers(data.members);
                } else {
                    console.error(data.message);
                }
            })
            .catch(error => console.error(`Error fetching ${membershipType} members data:`, error));
    };

    const fetchTrainers = () => {
        fetch('http://localhost:5000/trainers')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setTrainers(data.trainers);
                } else {
                    console.error(data.message);
                }
            })
            .catch(error => console.error('Error fetching trainers data:', error));
    };

    const fetchEquipment = () => {
        fetch('http://localhost:5000/work_equipment')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setEquipment(data.equipment);
                } else {
                    console.error(data.message);
                }
            })
            .catch(error => console.error('Error fetching equipment data:', error));
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:5000/members', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    fetchMembers(); // Refresh member list after adding a new member
                    setFormData({
                        first_name: '',
                        last_name: '',
                        email: '',
                        phone_number: '',
                        membership_type: ''
                    });
                } else {
                    console.error(data.message);
                }
            })
            .catch(error => console.error('Error adding member:', error));
    };

    return (
        <div>
            <h2>Add New Member</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
                </div>
                <div>
                    <label>Membership Type:</label>
                    <input type="text" name="membership_type" value={formData.membership_type} onChange={handleChange} required />
                </div>
                <button type="submit">Add Member</button>
            </form>

            <h2>Members</h2>
            <ul>
                {members.map(member => (
                    <li key={member.member_id}>
                        {member.first_name} {member.last_name} - {member.email} - {member.phone_number} - {member.membership_type}
                    </li>
                ))}
            </ul>

            <h2>Trainers</h2>
            <ul>
                {trainers.map(trainer => (
                    <li key={trainer.trainer_id}>
                        {trainer.first_name} {trainer.last_name}
                    </li>
                ))}
            </ul>

            <h2>Equipment</h2>
            <ul>
                {equipment.map(item => (
                    <li key={item.equipment_id}>
                        {item.equipment_name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
            <Sort/>
        </div>
    );
}

export default GymData;
