import './index.css';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import { siteData } from './data/siteData';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* SEO */}
      <title>{siteData.title}</title>
      <meta name="description" content={siteData.description} />

      <CommandPalette />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
