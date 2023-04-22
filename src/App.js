import './App.css';
import { useState,createContext } from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import News from './News';
import Business from './Business';
import Search from './Search';
import Entertainment from './Entertainment';
import Technology from './Technology';
import Health from './Health';
import Science from './Science';
import Sport from './Sport';
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
              <Route exact path='/technology' element={<Technology/>}/>
              <Route exact path='/health' element={<Health/>}/>
              <Route exact path='/science' element={<Science/>}/>
              <Route exact path='/search' element={<Search/>}/>
              <Route exact path='/sport' element={<Sport/>}/>
            </Routes>
          </contextWrapper.Provider>
       </Router>
      
    </div>
  );
}

export default App;
