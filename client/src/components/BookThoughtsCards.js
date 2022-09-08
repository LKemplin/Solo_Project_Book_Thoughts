import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookThoughtsCards = (props) => {
    const {bookCards, setBookCards} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/books')
        .then((results) => {
            console.log(results.data);
            setBookCards(results.data.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)));
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div className='row justify-content-md-center'>
            {
                bookCards.map((bookCard) => (
                    <BookCard key={bookCard.id} bookCard = {bookCard} />
                ))
            }
        </div>
    )}

export default BookThoughtsCards;