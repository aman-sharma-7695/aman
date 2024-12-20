import React from 'react'
import Slider from "react-slick";
import { SERVICE_CARD_DATA_LIST } from './common/Helper'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Service = () => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          dots: false,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],


  };

  return (
    <div className='bg-dark-black' id='services'>
      <div className="max-w-8xl mx-auto  px-4 pt-11 md:pt-20">
        <div className="text-white  md:text-center mb-8" data-aos="fade-up"
          data-aos-anchor-placement="bottom-center">
          <h2 className="text-10xl md:text-6xl lg:text-11xl font-semibold mb-4">Services</h2>
          <p className="max-w-[600px] lg:max-w-[732px] mx-auto text-sm lg:text-base ">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
            Aliquet donec morbi convallis pretium.
          </p>
        </div>


        <div className=' pt-14 md:pb-100 '>
          <Slider {...sliderSettings}>
            {SERVICE_CARD_DATA_LIST.map((obj, i) => {
              return (
                <div key={i} className=' md:px-4 '>
                  <div className='bg-white py-5 px-5 md:pt-57 md:pb-10 md:px-5  rounded-custom-2xl'>
                    <div>
                      <img src={obj.image} alt="" className='w-full max-w-[50px] md:max-w-[72px]' />
                    </div>
                    <div className=''>
                      <h3 className='text-black text-lg md:text-3xl font-semibold py-4  md:pt-26 md:pb-15 '> {obj.title}</h3>
                      <p className='text-black text-sm font-normal'>{obj.description}</p>
                    </div>

                  </div>
                </div>
              )
            })}
          </Slider>

        </div>

      </div>
    </div>


  )
}

export default Service