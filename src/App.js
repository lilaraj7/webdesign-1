import './App.css';
import { Navbar } from './components/Navbar';
import Display from './components/Display';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='header'>
       <div>
       <Navbar/>
        </div> 
        <div>
          <Display/>
        </div>
      </div>
    <div>
      <Banner/>
    </div>
    <footer>
      <Footer/>
    </footer>
    
    </div>
  );
}

export default App;
