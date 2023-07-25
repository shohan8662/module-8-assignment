import React from 'react';
import { Link } from 'react-router-dom';


const Income = () => {
    return (
        <div>
            <h1>This is Income Page</h1>
            <Link to={'/expense'}>Click Here to go Expense Page</Link><br />
            <Link to={'/'}>Click Here to go Home Page</Link>
        </div>
    );
};

export default Income;