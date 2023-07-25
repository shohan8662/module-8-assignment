import React from 'react';
import { Link } from 'react-router-dom';

const Expense = () => {
    return (
        <div>
            <h1>This is Expense Page</h1>
            <Link to={'/income'}>Click Here to go Income Page</Link><br/>
            <Link to={'/'}>Click Here to go Home Page</Link>
        </div>
    );
};

export default Expense;