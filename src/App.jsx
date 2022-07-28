import './App.css';
import { MoviesGrid } from './Pages/MoviesGrid';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { ListGrid } from './Pages/ListGrid';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import { MovieDetail } from './Pages/MovieDetail';


export default function App() {

  return (
    <Router>
      <div className="App">
        <header>
          <Header/>
        </header>
        
        <main className='row'>
          <Routes>
            <Route path="/" element={<MoviesGrid />} />
            <Route exact path="/MyList" element={<ListGrid />} />
            <Route path="/Movie/:movieId" element={<MovieDetail/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}