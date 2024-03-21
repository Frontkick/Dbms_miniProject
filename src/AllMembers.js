import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllMembers = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetchAllMembers();
    }, []);

    const fetchAllMembers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/allmembers',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setMembers(response.data);
        } catch (error) {
            console.error('Error fetching all members:', error);
        }
    };

    return (
        <div>
            <h2>All Members</h2>
            <table>
                <thead>
                    <tr>
                        <th>Member ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Trainer ID</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr key={index}>
                            <td>{member.member_id}</td>
                            <td>{member.first_name}</td>
                            <td>{member.last_name}</td>
                            <td>{member.email}</td>
                            <td>{member.phone_number}</td>
                            <td>{member.trainer_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllMembers;
