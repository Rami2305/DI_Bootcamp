import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import '/component/App.css'

export function DemoCarousel() {
   
    return (
        <div className="container">
            <Carousel>
            <div>
                <img src="1.jpg" />
                <p className="legend">Hong Kong</p>
            </div>
            <div>
                <img src="2.webp" />
                <p className="legend">Macao</p>
            </div>
            <div>
                <img src="3.webp" />
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src="4.webp" />
                <p className="legend">Las Vegas</p>
            </div>
            </Carousel>
        </div>
    );
}

export default DemoCarousel