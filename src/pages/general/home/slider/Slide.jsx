import React from 'react'
import Slider from 'react-slick'
import '../slider/slider.css'
import images from '../../../../constants/images'

const Slide = () => {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
      }
    return (
        <section className="homeSlider">
            <div className="container-fluid">
                <Slider {...settings} className="slider-main">
                    <div className="item">
                        <img src={images.Slider1} className="w-100" />
                    </div>
                    <div className="item">
                        <img src={images.Slider2} className="w-100" />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Slide