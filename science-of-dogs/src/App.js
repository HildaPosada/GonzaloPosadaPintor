import React from 'react';
import { FaDog } from 'react-icons/fa';
import './App.css';

const App = () => {
  return (
    <div className="bg-red-light min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-red-dark text-white">
        <h1 className="text-2xl font-bold flex items-center">
          <FaDog className="mr-2" /> Science of Dogs
        </h1>
        <nav className="space-x-4">
          <a href="#booking" className="hover:underline">Booking</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#philosophy" className="hover:underline">Philosophy</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-10">
        {/* TailwindCSS Confirmation Section */}
        <div className="text-center mb-10 bg-blue-500 text-white rounded-lg p-5">
          <h1 className="text-4xl font-bold">TailwindCSS is Successfully Installed!</h1>
          <p className="text-lg mt-4">Start using TailwindCSS classes to style your components.</p>
        </div>

        {/* Booking Section */}
        <section id="booking" className="mb-10">
          <h2 className="text-xl font-semibold">Booking</h2>
          <p>Book personalized services for your beloved dog.</p>
        </section>

        {/* About Us Section */}
        <section id="about" className="mb-10">
          <h2 className="text-xl font-semibold">About Us</h2>
          <p>
            Science of Dogs is dedicated to improving the lives of dogs through
            science-backed care.
          </p>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy">
          <h2 className="text-xl font-semibold">Philosophy</h2>
          <p>
            We believe in understanding dogs to provide the best care and training
            services.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-dark text-center text-white p-5">
        <p>© 2024 Science of Dogs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
