import NavBar from '../components/NavBar';
import BookThoughtsCards from '../components/BookThoughtsCards';

const Dashboard = (props) => {
    const {bookCards, setBookCards} = props

  return (
    <div>
        <NavBar />
        <hr />
        <BookThoughtsCards bookCards={bookCards} setBookCards={setBookCards} />
    </div>
  )
}

export default Dashboard