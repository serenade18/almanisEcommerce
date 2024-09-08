import React from 'react'
import Slider from 'react-slick'
import '../slider/slider.css'
import images from '../../../../constants/images'
import Button from '@mui/material/Button';

const Slide = () => {
    
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true
      }
    
    // WhatsApp number and message
    const whatsappLink = "https://wa.me/+254792902809?text=Hello,%20I%20would%20like%20to%20place%20an%20order";

    return (
        <section className="homeSlider">
            <div className="container-fluid position-relative">
                <Slider {...settings} className="slider-main">
                    <div className="item">
                        <img src={images.Slider1} className="w-100" />
                        <div className="info">
                            <h2 className="mb-4">
                                Don't miss amazing <br/>
                                grocery deals
                            </h2>
                            <p>Fresh organic from the farm</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={images.Slider2} className="w-100" />
                        <div className="info">
                            <h2 className="mb-4">
                                Best quality Mwea <br/>
                                pishori rice
                            </h2>
                            <p>Enjoy factory prices</p>
                        </div>
                    </div>
                </Slider>

                <div className="whatsAppOrd">
                    <input type="text" placeholder="Place your order now" disabled />
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button className="WhatsApp">
                            <i className="fi fi-brands-whatsapp me-2 align-items-center"></i>
                            WhatsApp us
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Slide;
