import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Layout from './hoc/Layout';
import icons from './constants/icons';

// lazy load pages
const Home = lazy(() => import('./pages/general/home/Home'))
const About = lazy(() => import('./pages/general/about/About'))

function App() {

  return (
    <Router>
      <Suspense fallback={
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <img 
            src={icons.Loader} 
            alt="Loading..." 
            style={{ width: '150px', height: '150px' }} // Adjust the size if necessary
          />
        </div>
      }>
        <Routes>
          {/* general pages */}
          <Route exact={true} path="/" element={<Layout><Home /></Layout>}/>
          <Route exact={true} path="/about" element={<Layout><About /></Layout>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
