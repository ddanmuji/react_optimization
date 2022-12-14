import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ItemsPage from './pages/ItemsPage';
import PartPage from './pages/PartPage';
import RidingStylesPage from './pages/RidingStylesPage';
import './App.css';
import './styles.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <section className="mx-auto mt-16">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/part" element={<PartPage />} />
          <Route path="/riding-styles" element={<RidingStylesPage />} />
        </Routes>
      </section>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
