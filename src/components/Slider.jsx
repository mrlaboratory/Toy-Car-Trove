import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/Ai';
import { HashLink } from 'react-router-hash-link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Slider = () => {
    return (
        <div>

            <div className='px-5 py-8 '>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 2 }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide >
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div data-aos="fade-left">
                                <img className='w-full p-10' src='https://i.ibb.co/j4FhHgS/Untitled-design-1.png' alt="" />
                            </div>
                            <div data-aos="fade-right" className='flex flex-col justify-center items-center text-left'>
                                <div>
                                    <h2 className='text-3xl md:text-4xl lg:text-5xl uppercase font-bold'>Explore The
                                        <br /> <span className='text-primary'>Toy Car Trove</span></h2>

                                    <p className='pt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos explicabo possimus libero quasi minus eos tempore atque culpa ipsam?</p>
                                    <div className='w-full flex justify-start mt-5'>
                                        <HashLink to='#' className='flex btn  btn-primary text-white'> See more toy car <AiOutlineArrowRight className='text-xl ml-2'></AiOutlineArrowRight>
                                        </HashLink>
                                    </div>
                                </div></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div data-aos="fade-left">
                                <img className='w-full p-10' src='https://htmldemo.net/kidol/kidol/assets/img/divider/4.png' alt="" />
                            </div>
                            <div data-aos="fade-right" className='flex flex-col justify-center items-center text-left'>
                                <div>
                                    <h2 className='text-3xl md:text-4xl lg:text-5xl uppercase font-bold'>Explore The
                                        <br /> <span className='text-primary'>Toy Car Trove</span></h2>

                                    <p className='pt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos explicabo possimus libero quasi minus eos tempore atque culpa ipsam?</p>
                                    <div className='w-full flex justify-start mt-5'>
                                        <HashLink to='#' className='flex btn  btn-primary text-white'> See more toy car <AiOutlineArrowRight className='text-xl ml-2'></AiOutlineArrowRight>
                                        </HashLink>
                                    </div>
                                </div></div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className='w-full relative '>
                    <img className='w-16 h-16 wiggle-image' src='https://htmldemo.net/kidol/kidol/assets/img/divider/shape3.png' alt="" />
                </div>

            </div>



        </div >
    );
};

export default Slider;