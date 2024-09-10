import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import './App.css' 
import Layout from './hoc/Layout';
import icons from './constants/icons';

// lazy load general pages
const Home = lazy(() => import('./pages/general/home/Home'))
const About = lazy(() => import('./pages/general/about/About'))
const Shop = lazy(() => import('./pages/general/shop/Shop'))
const Partner = lazy(() => import('./pages/general/partner/Partner'))
const Contact = lazy(() => import('./pages/general/contact/Contact'))

function App() {

  return (
    <Router>
      <Suspense fallback={
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <img 
            src={icons.Loader} 
            alt="Loading..." 
            style={{ width: '150px', height: '150px' }}
          />
        </div>
      }>
        <Routes>
          {/* general pages */}
          <Route exact={true} path="/" element={<Layout><Home /></Layout>}/>
          <Route exact={true} path="/about" element={<Layout><About /></Layout>}/>
          <Route exact={true} path="/shop" element={<Layout><Shop /></Layout>}/>
          <Route exact={true} path="/partner" element={<Layout><Partner /></Layout>}/>
          <Route exact={true} path="/contact" element={<Layout><Contact /></Layout>}/>
        </Routes>
      </Suspense>
      {/* WhatsApp widget */}
      <WhatsAppWidget companyName={'Almanis soko'} inputPlaceHolder={"Write message"} sendButtonText={'Send'} message={'Hello,\n\how can we assist you ?'} phoneNumber="+254792902809" />
    </Router>
  )
}

export default App;
