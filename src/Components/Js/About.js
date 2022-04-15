import React from 'react';
import '../Css/About.css'

const About = () => {

    return (
        <div className='featured' id="about">
        <div className="about" style={{textAlign:"center"}}><h2>About Trekposh</h2></div>
            <div className='container'>

               

                <div className='right'>
                   
                   
                   
                    <div className='card'>
                    <div className='top'>
                            <h3>Trekposh Background</h3>
                        </div>
                        <div>
                            {/* <h5>name</h5> */}
                            <p>The founders of Trekposh came up with the idea in 2017. Being avid travellers who love trekking, hiking and camping, our motto is to share our experience and encourage the like minded people to explore and love the nature and beauty of the mountains.</p>
                        </div>
                    </div>
                    <div className='card'>
                    <div className='top'>
                            <h3>How we Got Started</h3>
                        </div>
                        <div>
                           
                            <p>I was bitten with the travel bug somewhere in 2010. I went for camping and sightseeing solo that summer and I was hooked on to it. Since then, I've been to over 10 beautiful treks and I plan on more!</p>
                        </div>
                    </div>
                    <div className='card'>
                    <div className='top'>
                            <h3>Top Destinations from our list</h3>
                        </div>
                        <div>
                            <p>My favorite trek so far has been Great Himalayan National Park. I absolutely loved the colors of nature in Tirthan Valley. I hope I get to go back soon!</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;
