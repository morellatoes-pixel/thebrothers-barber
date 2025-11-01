import Hero from './components/Hero';
import OurCuts from './components/OurCuts';
import OurTeam from './components/OurTeam';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Hero />
      <OurCuts />
      <OurTeam />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
