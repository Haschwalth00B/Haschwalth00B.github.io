import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { siteData } from './data/siteData';

export default function App() {
  return (
    <>
      {/* SEO */}
      <title>{siteData.title}</title>
      <meta name="description" content={siteData.description} />

      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
