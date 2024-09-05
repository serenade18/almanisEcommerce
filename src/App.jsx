import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Layout from './hoc/Layout';

// lazy load pages
const Home = lazy(() => import('./pages/general/home/Home'))
const About = lazy(() => import('./pages/general/about/About'))

function App() {

  return (
    <Router>
      <Suspense>
          <Routes>
            {/* general pages */}
            <Route exact={true} path="/" element={<Layout><Home /></Layout>}/>
            <Route exact={true} path="/about" element={<Layout><About /></Layout>}/>
          </Routes>
      </Suspense>
    </Router>
  )
}

export default App
