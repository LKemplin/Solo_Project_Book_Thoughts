import React from 'react';
import NavBar from '../components/NavBar';
import ReadOneThought from '../components/ReadOneThought';


const Details = (props) => {
    const {bookCards, setBookCards, removeFromList} = props

    return (
    <div>
        <NavBar />
        <hr />
        <ReadOneThought bookCards={bookCards} setBookCards={setBookCards} removeFromList={removeFromList} />
    </div>
    )
}

export default Details