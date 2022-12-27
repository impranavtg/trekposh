import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero'
import Footer from './Footer'
import '../Css/Land.css';
import Form from './Form'
import Gallery from './Gallery'
import About from './About'
import { ToastContainer } from 'react-toastify';
import Particles from "react-tsparticles";
import UserContext from '../../../Context/UserContext'


function Land() {

  return (
    <>
     <Particles 
      id="tsparticles"
      options={{
        fpsLimit: 40,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: false,
              mode: "connect",
            },
           // resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#FF5722",
          },
          links: {
            color: "#00ADB5",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    /> 
    <UserContext>
     <Navbar/>
      <Hero />
      <About />
      <Gallery/>
      <Form/>
      <ToastContainer style={{zIndex: 999}} autoClose={4000}/>
      <Footer />
      </UserContext>
    </>
  );
}

export default Land;
