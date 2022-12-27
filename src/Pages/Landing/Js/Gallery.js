import React,{useContext} from 'react';
import { TreksContext } from '../../../Context/UserContext';
import 'react-slideshow-image/dist/styles.css';
import '../Css/Gallery.css';
import { Slide } from 'react-slideshow-image';
import img from "../Assets/image.jpg";

const Gallery = () => {
  const {images}=useContext(TreksContext);
  return (
    <div id="gallery" className='gallery'>
    <h2 className='Ghead'>Gallery</h2>
    <Slide easing="ease" className="slide">
    {images===null?(
      <div className="each-slide">
        <div>
         <img src={img} alt="Gallery" className='images'/>
        </div>
      </div>
    ):images.map(singleimage=>(
      <div className="each-slide" key={singleimage._id}>
        <div>
         <img src={`https://drive.google.com/uc?id=${singleimage?.image}`} alt="Gallery" className='images'/>
        </div>
      </div>))}
    </Slide>
  </div>
  )
}

export default Gallery