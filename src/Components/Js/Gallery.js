import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import '../Css/Gallery.css';
import { Slide } from 'react-slideshow-image';
import img1 from "../../Assets/gallery/image1.jpg";
import img2 from "../../Assets/gallery/image2.jpg";
import img3 from "../../Assets/gallery/image3.jpg";
import img4 from "../../Assets/gallery/image4.jpg";
import img5 from "../../Assets/gallery/image5.jpg";

const Gallery = () => {
  return (
    <div id="gallery" className='gallery'>
    <h2 className='Ghead'>Gallery</h2>
    <Slide easing="ease" className="slide">
      <div className="each-slide">
        <div>
         <img src={img1} alt="Gallery" className='images'/>
        </div>
      </div>
      <div className="each-slide">
        <div>
        <img src={img2} alt="Gallery" className='images'/>
        </div>
      </div>
      <div className="each-slide">
        <div>
        <img src={img3} alt="Gallery" className='images'/>
        </div>
      </div>
      <div className="each-slide">
        <div>
        <img src={img4} alt="Gallery" className='images'/>
        </div>
      </div>
      <div className="each-slide">
        <div>
        <img src={img5} alt="Gallery" className='images'/>
        </div>
      </div>
    </Slide>
  </div>
  )
}

export default Gallery