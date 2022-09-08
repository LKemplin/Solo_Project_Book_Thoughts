import React from 'react';
import {Link} from 'react-router-dom';


const BookCard = (props) => {
    const {bookCard} = props
    

    return (
    <div className='card card-main'>
        <h3 className='card-title'>Title: {bookCard.title}</h3>
        <h4 className='card-subtitle'>Author: {bookCard.author}</h4>
        <div className='card-body'>
            <p className='card-text'>
                <ul className='list-unstyled'>
                    <li>Posted by: {bookCard.posterName} on {new Date(bookCard.createdAt).toLocaleDateString()}</li>
                    <li>Rating: {bookCard.rating}</li>
                </ul>
            </p>
        </div>
        <div className='card-footer' id='card-footer-dashboard'>
            <Link to={`/bookthoughts/details/${bookCard._id}`}><button className='btn btn-outline-dark'>Read Thoughts</button></Link>
        </div>
    </div>
    )
}

export default BookCard