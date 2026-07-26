import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <p>Welcome to the Trainers App.</p>
            <Link to="/trainers">Trainers</Link>
        </div>
    );
}

export default Home;
