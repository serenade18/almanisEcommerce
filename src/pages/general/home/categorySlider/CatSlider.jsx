import React, { useState } from 'react'
import Slider from 'react-slick'
import images from '../../../../constants/images'

const CatSlider = () => {
    const [itemBg] = useState([
        '#FEEFEA',
        '#F2FCE4',
        '#FFFCEB',
        '#ECFFEC',
        '#FFF3FF',
        '#FEEFEA',
    ]);

    const categories = [
        { img: images.Cat1, name: 'Pishori' },
        { img: images.Cat2, name: 'Komboka' },
        { img: images.Cat3, name: 'Brown' },
        { img: images.Cat6, name: 'Broken' },
        { img: images.Cat4, name: 'Bran' },
        { img: images.Cat5, name: 'Husk' },
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false
    };

    return (
        <>
            <div className="catSlider">
                <div className="container mx-auto">
                    <div className="flex items-center">
                        <h2 className="text-2xl font-bold">Featured Categories</h2>
                    </div>
                    
                    <Slider {...settings} className="sliderCategory">
                        {categories.map((category, index) => (
                            <div className="item" key={index} style={{ backgroundColor: itemBg[index % itemBg.length] }}>
                                <div className="info flex flex-col items-center">
                                    <img src={category.img} alt={category.name} className="w-full h-auto" />
                                    <h5 className="text-lg mt-2">{category.name}</h5>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <br />
        </>
    )
}

export default CatSlider;