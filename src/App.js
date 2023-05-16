import './App.css';
import { useState,createContext } from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import News from './News';
import Business from './Business';
import Search from './Search';
import Entertainment from './Entertainment';
import World from './World';
import Science from './Science';
import Sport from './Sport';
import Politics from './Politics';
import Health from './Health';
export let contextWrapper=createContext()
function App() {

  const [country, setcountry] = useState('ng')
  const [language, setlanguage] = useState('en')
  return (
    <div className="App">
       <Router>
          <contextWrapper.Provider  value={[country,setcountry,language, setlanguage]}>
            <Routes>
              <Route exact path='/' element={<News/>}/>
              <Route exact path='/business' element={<Business/>}/>
              <Route exact path='/entertainment' element={<Entertainment/>}/>
              <Route exact path='/world' element={<World/>}/>
              <Route exact path='/politics' element={<Politics/>}/>
              <Route exact path='/science' element={<Science/>}/>
              <Route exact path='/search' element={<Search/>}/>
              <Route exact path='/sport' element={<Sport/>}/>
              <Route exact path='/health' element={<Health/>}/>
            </Routes>
          </contextWrapper.Provider>
       </Router>
      
    </div>
  );
}

export default App;
