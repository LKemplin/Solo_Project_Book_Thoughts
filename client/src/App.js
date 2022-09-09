import './App.css';
import Dashboard from './views/Dashboard';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {useState} from 'react';
import AddThoughts from './views/AddThoughts';
import Details from './views/Details';
import EditPage from './views/EditPage';

function App() {
  const [bookCards, setBookCards] = useState([])

  const removeFromList = (bookID) => {
    const newBookCards = bookCards.filter((book) => {
      return book._id !== bookID
    })
    setBookCards(newBookCards)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/bookthoughts/dashboard' />} />
          <Route path="/bookthoughts/dashboard" element={<Dashboard bookCards={bookCards} setBookCards={setBookCards} default />} />
          <Route path="/bookthoughts/add" element={<AddThoughts />} />
          <Route path='/bookthoughts/details/:id' element={<Details bookCards={bookCards} setBookCards={setBookCards} removeFromList={removeFromList} />} />
          <Route path='/bookthoughts/edit/:id' element={<EditPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
