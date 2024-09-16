import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import  About from './pages/About';
import  Home  from './pages/Home';
import  Experience  from './pages/Experience';
import  Contacts  from './pages/Contacts';
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
    <Navbar/> 
      <Routes>
      <Route path="/" element={<Home/>}     />
      <Route path="/About" element={<About/>}     />
      <Route path="/Experience" element={<Experience/>}     />
      <Route path="/Contacts" element={<Contacts/>}     />
      </Routes>
      <Footer/>
</BrowserRouter>
  );
}

