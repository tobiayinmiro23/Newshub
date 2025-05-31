import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Search, Others } from './AllFiles'
import './App.css'

const apiKey = import.meta.env.VITE_API_KEY;

function App() {

console.log(apiKey)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/invalidRoute' element={<h1 className='text-[2rem] font-bold text-center mt-[5rem]'>Invalid route</h1>} />
        <Route path='*' element={<Others />} />
      </Routes>
    </Router>
  )
}

export default App
