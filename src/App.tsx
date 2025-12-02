import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Impact from './components/Impact';
import Steps from './components/Steps';
import Gallery from './components/Gallery';
import Join from './components/Join';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Impact />
        <Steps />
        <Gallery />
        <Join />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
