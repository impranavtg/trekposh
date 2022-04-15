import React from 'react'
import Hero from './Components/Js/Hero'
import Footer from './Components/Js/Footer'
import './Land.css';
import Form from './Components/Js/Form'
import Gallery from './Components/Js/Gallery'
import About from './Components/Js/About'
import { ToastContainer } from 'react-toastify';


function Land() {
  return (
    <>

      <Hero />
      <About />
      <Gallery/>
      <Form/>
      <ToastContainer style={{zIndex: 999}} autoClose={4000}/>
      <Footer />
    </>
  );
}

export default Land;
