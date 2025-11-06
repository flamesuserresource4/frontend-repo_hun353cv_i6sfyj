import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 bg-white/70">
        <div className="container mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Resume (PDF)</a>
            <a href="https://github.com/yourname" className="hover:text-gray-900">GitHub</a>
            <a href="https://linkedin.com/in/yourname" className="hover:text-gray-900">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
