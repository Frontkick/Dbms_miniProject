import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InsertMembers= () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        trainer_id: ''
    });
    

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/insert_member', formData,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
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


    return (
        <div>
            <h2 className='mb-2'>Insert Member Details</h2>
            <form onSubmit={handleSubmit}>
                {/* Form inputs for member details */}
                <label>First Name:</label>
                <input className='text-black mb-2 border bg-slate-500 rounded-xl' type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
                <br />
                <label>Last Name:</label>
                <input className='text-black mb-2 border bg-slate-500 rounded-xl' type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
                <br />
                <label>Email:</label>
                <input className='text-black mb-2 border bg-slate-500 rounded-xl' type="email" name="email" value={formData.email} onChange={handleChange} />
                <br />
                <label>Phone Number:</label>
                <input className='text-black mb-2 border bg-slate-500 rounded-xl' type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />
                <br />
                <label>Trainer ID:</label>
                <input className='text-black mb-2 border bg-slate-500 rounded-xl' type="text" name="trainer_id" value={formData.trainer_id} onChange={handleChange} />
                <br />
                <button className='border mb-2 rounded-xl' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default InsertMembers;
