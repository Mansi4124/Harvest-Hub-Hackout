import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('farmer');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { name, email, password, role });
            alert('User registered successfully');
        } catch (error) {
            console.error(error);
            alert('Error registering user');
        }
    };

    return (
        <form onSubmit={handleSignUp}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="farmer">Farmer</option>
                <option value="consumer">Consumer</option>
            </select>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
