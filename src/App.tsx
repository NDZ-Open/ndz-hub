import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NdzChapters from './pages/NdzChapters';
import NdzLabs from './pages/NdzLabs';
import CampusBuilders from './pages/CampusBuilders';

function App() {
  return (
    <Layout>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapters" element={<NdzChapters />} />
          <Route path="/labs" element={<NdzLabs />} />
          <Route path="/builders" element={<CampusBuilders />} />
        </Routes>
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
