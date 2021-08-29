import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Projects />
      <BottomNavigation />
    </>
  );
}

