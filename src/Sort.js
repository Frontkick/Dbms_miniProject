import React, { useState, useEffect } from 'react';

function Sort() {
    const [members, setMembers] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const [equipment, setEquipment] = useState([]);
    const [membershipType, setMembershipType] = useState('');
    const [filteredMembers, setFilteredMembers] = useState([]);

    useEffect(() => {
        fetchMembers();
        fetchTrainers();
        fetchEquipment();
    }, []);

    useEffect(() => {
        if (membershipType) {
            const filtered = members.filter(member => member.membership_type === membershipType);
            setFilteredMembers(filtered);
        } else {
            setFilteredMembers([]);
        }
    }, [membershipType, members]);

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

    const handleMembershipTypeChange = event => {
        setMembershipType(event.target.value);
    };

    return (
        <div>
            <h2>Filter Members by Membership Type</h2>
            <select value={membershipType} onChange={handleMembershipTypeChange}>
                <option value="">All</option>
                <option value="Basic">Basic</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
                <option value="Silver">Silver</option>
            </select>

            <h2>Filtered Members</h2>
            <ul>
                {filteredMembers.map(member => (
                    <li key={member.member_id}>
                        {member.first_name} {member.last_name} - {member.email} - {member.phone_number} - {member.membership_type}
                    </li>
                ))}
            </ul>

            

            
            
        </div>
    );
}

export default Sort;
