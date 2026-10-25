import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Exploring from './components/Exploring';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Goals from './components/Goals';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Exploring />
        <Projects />
        <Achievements />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
