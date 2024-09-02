import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'

// lazy load pages
const Home = lazy(() => import('./pages/general/home/Home'))
const About = lazy(() => import('./pages/general/about/About'))

function App() {

  return (
    <Router>
      <Suspense>
        <Header/>
          <Routes>
            {/* general pages */}
            <Route exact={true} path="/" element={<Home />}/>
            <Route exact={true} path="/about" element={<About />}/>
          </Routes>
        {/* <Footer/> */}
      </Suspense>
    </Router>
  )
}

export default App
