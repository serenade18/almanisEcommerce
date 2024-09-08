import React, { useState } from 'react'
import Slider from 'react-slick'
import '../categorySlider/cat.css'
import images from '../../../../constants/images'

const CatSlider = () => {

    const categories = [
        { name: "Pishori", img: images.Cat1, items: 26 },
        { name: "Komboka", img: images.Cat2, items: 26 },
        { name: "Brown", img: images.Cat3, items: 26 },
        { name: "Bran", img: images.Cat4, items: 26 },
        { name: "Husk", img: images.Cat5, items: 26 },
        { name: "Broken", img: images.Cat6, items: 26 }
    ];

    const [itemBg] = useState([
        '#FEEFEA',
        '#F2FCE4',
        '#FFFCEB',
        '#ECFFEC',
        '#FFF3FF',
        '#FEEFEA',
    ]);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
    };

    return (
        <>
            <div className="catSlider">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <h2 className="bd">Featured Categories</h2>
                    </div>

                    <Slider {...settings} className="sliderCategory">
                        {categories.map((category, index) => (
                            <div className="item" key={index} style={{ backgroundColor: itemBg }}>
                                <div className="info">
                                    <img src={category.img} alt={category.name} />
                                    <h5>{category.name}</h5>
                                    <p>{category.items} items</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <br />
        </>
    );
}

export default CatSlider;
