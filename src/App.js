import './App.css';
import { MoviesGrid } from './Components/MoviesGrid';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { ListGrid } from './Components/ListGrid';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='row'>
        <div className='col-md-6'>
          <ListGrid></ListGrid>
        </div>
        <div className='col-md-6'>
          <MoviesGrid></MoviesGrid>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
