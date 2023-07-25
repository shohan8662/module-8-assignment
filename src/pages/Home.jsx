import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>This is Home Page</h1>
            <Link to={'/expense'}>Click Here to go Expense Page</Link><br/>
            <Link to={'/income'}>Click Here to go Income Page</Link>
        </div>
    );
};

export default Home;