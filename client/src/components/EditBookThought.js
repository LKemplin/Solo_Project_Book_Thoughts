import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate, Link} from 'react-router-dom';
import StarRating from './StarRating';

const EditBookThought = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [series, setSeries] = useState('');
    const [posterName, setPosterName] = useState('');
    const [rating, setRating] = useState();
    const [thoughts, setThoughts] = useState();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
        .then((results) => {
            console.log(results.data);
            setTitle(results.data.title);
            setAuthor(results.data.author);
            setSeries(results.data.series);
            setPosterName(results.data.posterName);
            setRating(results.data.rating);
            setThoughts(results.data.thoughts);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/books/update/${id}`, {
            title,
            author,
            series,
            posterName,
            rating,
            thoughts
        }).then((results) => {
            console.log(results);
            navigate('/');
        }).catch((err) => {
            console.log(err)
            setErrors(err.response.data.error)
        })
    }

  return (
    <div className='container'>
            <div className='d-flex justify-content-center m-3 form-div'>
                <form className='form p-3 border border-dark border-1 text-center book-form' onSubmit={updateHandler}>
                    <div>
                        <label className='form-label'>Book Title:</label>
                        {errors.title && <p className='text-danger'>{errors.title.message}</p>}
                        <input type="text" value={title} className='form-control' onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label className='form-label'>Author:</label>
                        {errors.author && <p className='text-danger'>{errors.author.message}</p>}
                        <input type="text" value={author} className='form-control' onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <div>
                        <label className='form-label'>Series:</label>
                        {errors.series && <p className='text-danger'>{errors.series.message}</p>}
                        <input type="text" value={series} className='form-control' onChange={(e) => setSeries(e.target.value)} />
                    </div>
                    <div>
                        <label className='form-label'>Posted By:</label>
                        {errors.posterName && <p className='text-danger'>{errors.posterName.message}</p>}
                        <input type="text" value={posterName} className='form-control' onChange={(e) => setPosterName(e.target.value)} />
                    </div>
                    <div> 
                        <label className='form-label'>How many stars would you give this book?</label>
                        {errors.rating && <p className='text-danger'>{errors.rating.message}</p>}
                        <StarRating rating={rating} setRating={setRating} />
                    </div>
                    <div>
                        <label className='form-label'>Thoughts:</label>
                        {errors.thoughts && <p className='text-danger'>{errors.thoughts.message}</p>}
                        <textarea value={thoughts} className='form-control' cols="30" rows="10" onChange={(e) => setThoughts(e.target.value)}></textarea>
                    </div>
                    <div>
                        <button className='btn btn-info-outline-dark m-3 btn-submit'>Add Thoughts</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default EditBookThought