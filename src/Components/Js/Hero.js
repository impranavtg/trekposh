import React from 'react';
import '../Css/Hero.css';
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
import travel from '../../Assets/travel.png';

const Hero = () => {
    return (
        <div className='hero' id="hero">
            <div className='container'>

                {/* Left Side */}
                <motion.div 
                 initial= {{
                    y: 40,
                    opacity: 0,
                    }
                 }
                    animate= {
                        {
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                    }
                    }
                    }
                className='left'>
                    <h1>A traveller's paradise to get set go on trips and treks.</h1>
                    <p>Make your next trip awesome</p>
                    <div className='input-container'>
                        {/* <input type='email' placeholder='Enter your email' /> */}
                        <Link to="contact"><button className='btn'>Ek Trip Karo</button></Link>
                    </div>
                </motion.div>


                {/* Right Side */}
                <div className='right'>
                    <motion.div
                     initial= {{
                        y: -1000
                     }
                    }
                    animate= {
                        {
                        y: 0,
                        transition: {
                        delay: 1,
                        duration: 0.8,
                        type: "spring",
                        }
                        }
                    }
                     className='img-container'>
                        <motion.img 
                           initial= {
                        {
                        y: 0
                        }
                    }
                    animate= {
                        {
                        y: [8, 0, 8],
                        transition: {
                        duration: 1.6,
                        ease: "linear",
                        repeat: Infinity,
                        }
                        }
                    }
                        src={travel} alt=''/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
