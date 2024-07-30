import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomeContainer from './Pages/HomeContainer/HomeContainer';
import Footer from './components/footer/Footer';
import Bus from './Pages/Bus/Bus';
import Details from './Pages/Details/Details';
import CheckOut from './Pages/CheckOut/CheckOut';

function App() {

  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/bus' element={<Bus />} />
            <Route path='/bus/bus-details' element={<Details />} />
            <Route path='/bus/bus-details/checkout' element={<CheckOut />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
