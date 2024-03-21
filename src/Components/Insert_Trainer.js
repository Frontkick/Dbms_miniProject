import React, { useState } from 'react';

const InsertTrainer = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/insert_trainer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ first_name: firstName, last_name: lastName })
            });
            const data = await response.json();
            setMessage(data.message);
            // Clear form inputs after successful submission
            setFirstName('');
            setLastName('');
        } catch (error) {
            console.error('Error inserting trainer:', error);
            setMessage('Error inserting trainer. Please try again.');
        }
    };

    return (
        <div>
            <h2>Insert Trainer</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input className='text-black mt-2 mb-2 border bg-slate-500 rounded-xl' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input className='text-black mt-2 mb-2 border bg-slate-500 rounded-xl' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <br />
                <button className='border rounded-xl' type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default InsertTrainer;
