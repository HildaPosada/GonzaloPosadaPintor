import React, { useState } from 'react';
import './App.css';
import { FaBars, FaTimes, FaInstagram } from 'react-icons/fa';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-black fixed w-full z-10">
        <div className="text-3xl font-bold tracking-wide">
          <h1>Gonzalo Posada Art</h1>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-8 p-6 md:p-0`}
        >
          <a href="#gallery" className="block md:inline hover:underline">
            Gallery
          </a>
          <a href="#about" className="block md:inline hover:underline">
            About
          </a>
          <a href="#contact" className="block md:inline hover:underline">
            Contact
          </a>
        </nav>
      </header>  
         
      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Gallery Section */}
        <section id="gallery" className="py-16 px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Artwork Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Replace this block with dynamic artwork data */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative">
                <img
                  src={`/artwork/artwork-${item}.jpg`}
                  alt={`Artwork ${item}`}
                  className="w-full h-80 object-cover border border-gray-800"
                />
                <a
                  href={`https://www.etsy.com/listing/artwork-${item}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
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
              href="https://www.instagram.com/gonzaloposadaart"
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
