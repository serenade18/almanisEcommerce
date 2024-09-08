import React from 'react'
import Slider from 'react-slick'
import '../slider/slider.css'
import images from '../../../../constants/images'

const Slide = () => {
    var settings = {
        dots: true,
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
                        <div className="info">
                            <h2 className="mb-4">
                                Don't miss amazing <br/>
                                grocery deals
                            </h2>
                            <p>Place your order now</p>
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
            </div>
        </section>
    )
}

export default Slide