import React, { useState } from 'react';
import './App.css';
import { FaBars, FaTimes, FaInstagram } from 'react-icons/fa';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-black fixed w-full z-10 shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold uppercase tracking-widest">
            Gonzalo Posada Art
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8 text-lg font-medium relative">
          {['Home', 'Gallery', 'About', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-red-300 transition-colors duration-300"
            >
              {item}
              <span
                className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-red-300 transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
        {/* Mobile Menu */}
        <nav
          className={`absolute top-16 left-0 w-full bg-black flex flex-col items-center py-4 md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {['Home', 'Gallery', 'About', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="py-2 text-lg hover:text-red-300 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Gallery Section */}
        <section id="gallery" className="py-16 px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Artwork Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dynamic Artwork Data */}
            {[
              { id: 1, title: 'Artwork 1', image: '/artwork/artwork1.png', link: 'https://www.etsy.com/listing/artwork1' },
              { id: 2, title: 'Artwork 2', image: '/artwork/artwork2.png', link: 'https://www.etsy.com/listing/artwork2' },
              { id: 3, title: 'Artwork 3', image: '/artwork/artwork3.png', link: 'https://www.etsy.com/listing/artwork3' },
            ].map((art) => (
              <div key={art.id} className="relative group">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-auto object-cover border border-gray-800"
                />
                <a
                  href={art.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span className="text-white text-lg font-semibold">Purchase on Etsy</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-6 bg-gray-900">
          <h2 className="text-4xl font-bold text-center mb-8">About the Artist</h2>
          <p className="text-center max-w-3xl mx-auto text-lg text-gray-300">
            Gonzalo Posada is a Colombian painter whose work captures the vibrant culture and landscapes of his homeland. His art is a reflection of his passion for nature, color, and storytelling.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
          <p className="text-center text-lg text-gray-300">
            Follow Gonzalo on Instagram or reach out for collaborations.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://www.instagram.com/posadagepinturas/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-300"
            >
              <FaInstagram className="text-4xl" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6">
        <p className="text-gray-400">
          © 2024 Gonzalo Posada Art. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
