import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
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
        <div className="flex justify-center items-center min-h-screen">
          <img 
            src={icons.Loader} 
            alt="Loading..." 
            className="w-36 h-36"
          />
        </div>
      }>
        <Routes>
          {/* general pages */}
          <Route path="/" element={<Layout><Home /></Layout>}/>
          <Route path="/about" element={<Layout><About /></Layout>}/>
          <Route path="/shop" element={<Layout><Shop /></Layout>}/>
          <Route path="/partner" element={<Layout><Partner /></Layout>}/>
          <Route path="/contact" element={<Layout><Contact /></Layout>}/>
        </Routes>
      </Suspense>
      {/* WhatsApp widget */}
      <WhatsAppWidget companyName={'Almanis soko'} inputPlaceHolder={"Write message"} sendButtonText={'Send'} message={'Hello,\n\how can we assist you ?'} phoneNumber="+254792902809" />
    </Router>
  )
}

export default App;