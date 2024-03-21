import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Membership_price = () => {
    const [membershipPrices, setMembershipPrices] = useState([]);

    useEffect(() => {
        fetchMembershipPrices();
    }, []);

    const fetchMembershipPrices = async () => {
        try {
            const response = await axios.get('http://localhost:5000/membership_prices',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setMembershipPrices(response.data);
        } catch (error) {
            console.error('Error fetching membership prices:', error);
        }
    };

    return (
        <div>
            <h2>Membership Prices</h2>
            <ul>
                {membershipPrices.map((price, index) => (
                    <li key={index}>{price.membership_name} - Price: {price.price}</li>
                ))}
            </ul>

            
        </div>
    );
};

export default Membership_price;
