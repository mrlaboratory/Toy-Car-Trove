import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const reviewData = [
    {
      name: "Alex",
      review: "I really enjoyed playing with the toy cars I purchased from your marketplace. The quality and attention to detail are impressive. Thank you for providing such great products!",
      image_url: "https://htmldemo.net/kidol/kidol/assets/img/testimonial/1.png",
    },
    {
      name: "Olivia",
      review: "The toy cars I bought from your marketplace exceeded my expectations. The designs and functionality are fantastic. My kids love playing with them. Highly recommended!",
      image_url: "https://htmldemo.net/kidol/kidol/assets/img/testimonial/2.png",
    },
    {
      name: "Liam",
      review: "Thank you for offering a wide variety of toy cars on your marketplace. The selection is excellent, and the customer service was top-notch. My son is thrilled with his new collection!",
      image_url: "https://mrlaboratory.github.io/img/customer/man1.png",
    },
    {
      name: "Emma",
      review: "I'm impressed with the toy cars I received from your marketplace. The build quality is exceptional, and they provide hours of entertainment for my children. Keep up the great work!",
      image_url: "https://htmldemo.net/kidol/kidol/assets/img/testimonial/3.png",
    },
    {
      name: "Mason",
      review: "The toy cars I purchased from your marketplace are a hit with my nephew. The attention to detail and vibrant colors make them stand out. Thank you for offering such amazing products!",
      image_url: "https://mrlaboratory.github.io/img/customer/girl1.jpg",
    },
    {
      name: "Ava",
      review: "I'm extremely satisfied with the toy cars I bought from your marketplace. The prices are reasonable, and the quality is excellent. It's a pleasure to do business with you!",
      image_url: "https://mrlaboratory.github.io/img/customer/girl2.jpg",
    },
    {
      name: "Noah",
      review: "The toy cars I ordered from your marketplace are fantastic. They arrived quickly and were well-packaged. My kids are having a blast playing with them. Thank you!",
      image_url: "https://mrlaboratory.github.io/img/customer/girl3.png",
    },
  ];
  




// this is reviews section 
const Reviews = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 500);
        }
        window.addEventListener('resize', handleResize);

        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='w-full my-10'>
            <h2 className='text-center text-gray-600 mt-3 text-4xl font-bold uppercase'>Testimonial</h2>
            <div className='p-5 mt-5'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={isMobile ? 1 : 2}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >

                    {
                        reviewData.map((item, i) => <SwiperSlide key={i}>
                            <div data-aos="flip-up" className='mb-10 ml-2 text-center border-2 border-primary bg-white rounded-lg p-5'>
                                <div className='mb-5'>
                                  
                                    <h3 className='font-bold  italic text-primary'>{item.name}</h3>
                                    <h4 className='mt-2'>{item.review}</h4>
                                </div >

                                <div className='w-full flex justify-center items-center'>
                                    <div className='z-10 w-[80px] h-[80px] absolute -left-1 -bottom-10 rounded-full overflow-hidden border-2 border-primary'>
                                        <img className='w-full h-full' src={item.image_url} alt="" />
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;