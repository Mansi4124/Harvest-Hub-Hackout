import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
    const [loading, setLoading] = useState(false);
    const [loaderWidth, setLoaderWidth] = useState('0%');
    const location = useLocation();

    useEffect(() => {
        const handleStartLoading = () => {
            setLoading(true);
            setLoaderWidth('0%');

            setTimeout(() => {
                setLoaderWidth('100%');
            }, 100);
        };

        const handleEndLoading = () => {
            setLoaderWidth('100%');
            setTimeout(() => {
                setLoading(false);
                setLoaderWidth('0%');
            }, 500);
        };

        handleStartLoading();

        setTimeout(() => {
            handleEndLoading();
        }, 1500);

        return () => {
            setLoading(false);
            setLoaderWidth('0%');
        };
    }, [location]);

    // Inline styles with farming-related color grading and blur effect
    const navbarStyle = {
        backgroundColor: 'rgba(123, 154, 96, 0.6)', // Semi-transparent green background
        backdropFilter: 'blur(10px)', // Blur effect
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };

    const loaderStyle = {
        height: '4px',
        backgroundColor: '#6b8e23',
        width: loaderWidth,
        position: 'absolute',
        top: '0',
        left: '0',
        transition: 'width 0.5s ease',
        zIndex: '1000',
    };

    const linkStyle = {
        color: '#ffffff',
        transition: 'color 0.3s ease',
    };

    const activeLinkStyle = {
        ...linkStyle,
        fontWeight: 'bold',
        textDecoration: 'underline',
    };

    const buttonStyle = {
        backgroundColor: '#8FBC8F',
        borderRadius: '20px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    };

    const buttonHoverStyle = {
        backgroundColor: '#556B2F',
        color: '#fff',
    };

    const toggleStyle = {
        width: '40px',
        height: '20px',
        borderRadius: '10px',
        backgroundColor: '#6c757d',
        transition: 'background-color 0.3s ease',
    };

    const toggleCheckedStyle = {
        ...toggleStyle,
        backgroundColor: '#556B2F',
    };

    return (
        <>
            {loading && <div style={loaderStyle}></div>}
            <nav className={`navbar navbar-expand-lg `} style={navbarStyle}>
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/" style={{ fontWeight: 'bold', color: '#ffffff' }}>{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" style={activeLinkStyle}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/marketplace" target='' style={linkStyle}>Marketplace</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                                style={buttonStyle}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                            >
                                Search
                            </button>
                        </form>
                        <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                onClick={props.toggleMode}
                                role="switch"
                                id="flexSwitchCheckDefault"
                                style={props.mode === 'light' ? toggleStyle : toggleCheckedStyle}
                            />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
                        </div>
                        <div className="d-flex gap-2">
                            <Link to="/login">
                                <button className='btn btn-primary' style={buttonStyle}>Login</button>
                            </Link>
                            <Link to="/signup">
                                <button className='btn btn-secondary' style={buttonStyle}>Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
    title: "Set title here",
};
