import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Intro from '../components/Intro';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Intro/>
      <Footer />
    </div>
  );
}
