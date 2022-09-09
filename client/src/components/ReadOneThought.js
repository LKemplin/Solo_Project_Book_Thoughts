import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom';

const ReadOneThought = (props) => {
    const {bookCards, setBookCards, removeFromList} = props
    const {id} = useParams();
    const [book, setBook] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
        .then((results) => {
            console.log(results.data)
            setBook(results.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/books/${id}`)
        .then((res) => {
            removeFromList(id);
            navigate('/')
        }).catch((err) => console.log(err))
    }

    return (
        <div className='container-fluid d-flex justify-content-center'>
            <div className='card col-8'>
                <h2 className='card-title'>{book.title}</h2>
                <h3 className='card-subtitle'>{book.author}</h3>
                {book.series && <h4 className='card-subtitle mt-2'>Series: {book.series}</h4>}
                <div className='card-body'>
                    <p>Posted by: {book.posterName} on {new Date(book.createdAt).toLocaleDateString()}</p>
                    <p>Rating: {book.rating}</p>
                    <p>Thoughts: {book.thoughts}</p>
                    <Link to={`/bookthoughts/edit/${id}`}><button className='btn m-2'>Edit</button></Link>
                    <Link to={`/bookthoughts/delete/${id}`}>
                        <button className='btn m-2' onClick={() => deleteHandler(book._id)}>Delete</button>
                    </Link>
                </div>

                <div className='card-footer'>
                    Last updated: {new Date(book.updatedAt).toLocaleDateString()}
                </div>
            </div>
        </div>
    )
}

export default ReadOneThought