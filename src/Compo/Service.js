import React from 'react';
// import '../Styles/Service.scss';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/3.jpg';
import img2 from '../Assets/4.jpg';
const Service = () => {
  return (
    <div className='service'>
        <Carousel 
        infiniteLoop       
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={2000}
        showThumbs={false}

        >

          <div>
            <img src={img1} alt="Item-1" />
            <p className='legend'>Front-End </p>
          </div>
          <div>
            <img src={img2} alt="Item-2" />
            <p className='legend'>Network Support </p>
          </div>

        </Carousel>
    </div>
  )
}

export default Service;