import React from 'react';
import {Link} from 'react-router-dom';

const navbar = () => {
    return (
        <div className='d-flex justify-content-around navbar'>
            <Link to='/' id='book-thoughts'><h1>Book Thoughts</h1></Link>
            <Link to='/bookthoughts/add'><button className='btn'>Add Thoughts</button></Link>
            <button className='btn'>Log In</button>
        </div>
    )
}

export default navbar