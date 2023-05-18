import React from 'react';
import { BsFacebook, BsTwitter, BsLinkedin, BsPinterest , BsWhatsapp } from 'react-icons/Bs';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer className="footer p-2 py-10  text-gray-600">
                <div>
                    <img className='w-[150px] h-full' src="https://i.ibb.co/X4yn9gt/Untitled-design-2.png" alt="" />
                    <p>Thank you for choosing <span className='fond-bold text-primary'>Toy Car Trove</span> , <br /> and we hope you enjoy browsing our collection <br /> as much as we enjoyed curating it. </p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Affiliate</a>
                </div>
                <div>
                    <span className="footer-title">Contact information</span>
                    <p>Address : Patiya, Chittagong, Bangladesh</p>
                    <p>Phone : +8801854650673</p>
                    <p>Email : mrlaboratory23@gmail.com</p>
                    <div className='flex justify-center items-center gap-2'>
                        <a href="#"> <BsFacebook className='text-xl text-primary'></BsFacebook> </a>
                        <a href="#"> <BsTwitter className='text-xl text-primary'></BsTwitter> </a>
                        <a href="#"> <BsLinkedin className='text-xl text-primary'></BsLinkedin> </a>
                        <a href="#"> <BsPinterest className='text-xl text-primary'></BsPinterest> </a>
                        <a href="#"> <BsWhatsapp className='text-xl text-primary'></BsWhatsapp> </a>
                    </div>
                </div>
            </footer>
            <div className='w-full h-16 flex justify-center p-5 items-center border-t-2 border-primary'>
                <div className=''>
                    <h5>Copyright 2023 : <span className='font-bold text-primary'>Toy Car Trove </span> || All right reserved </h5>

                </div>


            </div>
        </div>
    );
};

export default Footer;