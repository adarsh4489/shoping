
import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home';
import Cart from './Pages/Cart';

function App() {

  return (
    <div className='full max-w-[1400px] mx-auto'>
      <div className='w-full'> 
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>

  )
}

export default App
