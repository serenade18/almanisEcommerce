import React from 'react'
import Slider from 'react-slick'
import images from '../../../../constants/images'
import Button from '@mui/material/Button';

const Slide = () => {
    
    const settings = {
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true
      }
    
    const whatsappLink = "https://wa.me/+254792902809?text=Hello,%20I%20would%20like%20to%20place%20an%20order";

    return (
        <section className="homeSlider">
            <div className="container mx-auto relative">
                <Slider {...settings} className="slider-main">
                    <div className="item">
                        <img src={images.Slider2} className="w-full" />
                        <div className="info">
                            <h2 className="mb-3">
                                Best quality Mwea <br/>
                                pishori rice
                            </h2>
                            <p>Enjoy factory prices</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={images.Slider1} className="w-full" />
                        <div className="info">
                            <h2 className="mb-3">
                                Don't miss amazing <br/>
                                cereal deals
                            </h2>
                            <p>Fresh organic from the farm</p>
                        </div>
                    </div>
                </Slider>

                <div className="whatsAppOrd flex items-center space-x-2">
                    <input type="text" placeholder="Place your order now" disabled className="border rounded p-2" />
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button className="WhatsApp flex items-center">
                            <i className="fi fi-brands-whatsapp mr-2"></i>
                            WhatsApp us
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Slide;