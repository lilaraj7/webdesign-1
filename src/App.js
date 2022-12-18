import './App.css';
import { Navbar } from './components/Navbar';
import Display from './components/Display';
import Banner from './components/Banner';

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
    </div>
  );
}

export default App;
