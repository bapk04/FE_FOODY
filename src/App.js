import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import MealDetail from './pages/MealDetail';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import Cart from './components/Cart';
import BlockPage from './components/BlockPage';

const App = () => {
  // // Kiểm tra trình duyệt Chrome (bỏ Edge, Opera, Brave, Vivaldi, YaBrowser)
  // const userAgent = navigator.userAgent;
  // const isChrome = /Chrome/.test(userAgent) && !/Edg|OPR|Brave|Vivaldi|YaBrowser/.test(userAgent);

  // // Kiểm tra domain
  // const isTargetDomain = window.location.hostname === 'hoxuanhung2802.id.vn';

  // if (isChrome && isTargetDomain) {
  //   // Nếu là Chrome và domain target thì chặn
  //   return <BlockPage />;
  // }

  // Nếu không thì render app bình thường
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/meal/:id" element={<MealDetail />} />
          <Route path="/404" element={<NotFound />} />
          {/* Redirect any unknown routes to 404 */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
