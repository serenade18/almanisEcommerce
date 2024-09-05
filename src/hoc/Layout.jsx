import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header at the top */}
      <Header />
      
      {/* Main content with space added below the header */}
      <main style={{ marginTop: '180px' }}> 
        {children}
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
