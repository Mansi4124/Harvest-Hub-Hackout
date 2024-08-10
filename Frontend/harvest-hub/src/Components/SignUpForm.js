import React, { useState } from 'react';
import axios from 'axios';
import './SignUpForm.css'; // Import the CSS file

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
        <div className="login-container">
            <form className="login-form" onSubmit={handleSignUp}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="form-control"
                    >
                        <option value="farmer">Farmer</option>
                        <option value="consumer">Consumer</option>
                    </select>
                </div>
                <button type="submit" className="btn-primary">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;