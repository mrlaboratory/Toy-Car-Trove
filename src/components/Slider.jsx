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
                
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                >
                    
                    <SwiperSlide >
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div data-aos="fade-right">
                                <img className='w-full p-10' src='https://i.ibb.co/939MDrc/Untitled-design-11.png' alt="" />
                            </div>
                            <div data-aos="fade-left" className='flex flex-col justify-center items-center text-left'>
                                <div>
                                    <h2 className='text-3xl md:text-4xl lg:text-5xl uppercase font-bold'>The
                                        <br /> <span className='text-primary'>Toy Car Trove</span></h2>

                                    <p className='pt-5'>Toy Car Trove: Your ultimate destination for toy car collectors, offering a diverse selection of rare and vintage pieces, along with a vibrant community of enthusiasts.</p>
                                    <div className='w-full flex justify-start mt-5'>
                                        <HashLink  to='#category' className='flex btn  btn-primary text-white'> See more toy car <AiOutlineArrowRight className='text-xl ml-2'></AiOutlineArrowRight>
                                        </HashLink>
                                    </div>
                                </div></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div data-aos="fade-right">
                                <img className='w-full p-10' src='https://i.ibb.co/dpTD8Bv/Untitled-design-10.png' alt="" />
                            </div>
                            <div data-aos="fade-left" className='flex flex-col justify-center items-center text-left'>
                                <div>
                                    <h2 className='text-3xl md:text-4xl lg:text-5xl uppercase font-bold'>The
                                        <br /> <span className='text-primary'>Toy Car Trove</span></h2>

                                    <p className='pt-5'>Toy Car Trove: Your ultimate destination for toy car collectors, offering a diverse selection of rare and vintage pieces, along with a vibrant community of enthusiasts.</p>
                                    <div className='w-full flex justify-start mt-5'>
                                        <HashLink  to='#category' className='flex btn  btn-primary text-white'> See more toy car <AiOutlineArrowRight className='text-xl ml-2'></AiOutlineArrowRight>
                                        </HashLink>
                                    </div>
                                </div></div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide >
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div data-aos="fade-right">
                                <img className='w-full p-10' src='https://i.ibb.co/wLwK2YK/Untitled-design-9.png' alt="" />
                            </div>
                            <div data-aos="fade-left" className='flex flex-col justify-center items-center text-left'>
                                <div>
                                    <h2 className='text-3xl md:text-4xl lg:text-5xl uppercase font-bold'>The
                                        <br /> <span className='text-primary'>Toy Car Trove</span></h2>

                                    <p className='pt-5'>Toy Car Trove: Your ultimate destination for toy car collectors, offering a diverse selection of rare and vintage pieces, along with a vibrant community of enthusiasts.</p>
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