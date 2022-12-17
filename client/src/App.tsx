import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer, Header } from './components';
import { ROUTER_PATH } from './constants';
import { ItemsPage, MainPage, PartPage, RidingStylesPage } from './pages';
import './styles/global.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <section className="mx-auto mt-16">
        <Suspense fallback={<span>Loading...</span>}>
          <Routes>
            <Route path={ROUTER_PATH.MAIN} element={<MainPage />} />
            <Route path={ROUTER_PATH.ITEMS} element={<ItemsPage />} />
            <Route path={ROUTER_PATH.PART} element={<PartPage />} />
            <Route path={ROUTER_PATH.RIDING_STYLES} element={<RidingStylesPage />} />
          </Routes>
        </Suspense>
      </section>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
