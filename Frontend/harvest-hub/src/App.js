import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Harvest Hub</h1>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Sign Up</Link>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignUpForm />} />
            </Routes>
        </Router>
    );
};

export default App;
