import React, { useState } from 'react';
import axios from 'axios';

const MembersTable = () => {
    const [membershipType, setMembershipType] = useState('');
    const [members, setMembers] = useState([]);

    const handleChange = (e) => {
        setMembershipType(e.target.value);
    };

    const handleFetchMembers = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/members_by_membership/${membershipType}`);
            setMembers(response.data);
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    };

    return (
        <div>
            <h2>Members by Membership Type</h2>
            <select className=' bg-slate-500 rounded-xl text-black' value={membershipType} onChange={handleChange}>
                <option value="">Select Membership Type</option>
                <option value="gold">Gold</option>
                <option value="premium">Premium</option>
                <option value="basic">Basic</option>
                <option value="silver">Silver</option>
            </select>
            <button className='border rounded-xl' onClick={handleFetchMembers}>Fetch Members</button>
            {members.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th >Member ID &nbsp;</th>
                            <th>First Name &nbsp;</th>
                            <th>Last Name </th>
                            <th>Email</th>
                            <th>Phone Number &nbsp; &nbsp;</th>
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
                                <td >&nbsp;&nbsp;&nbsp;{member.phone_number}</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{member.trainer_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MembersTable;
