import React from 'react';
import { Gallery } from "react-grid-gallery";

const images = [
    {
        src: "https://i.ibb.co/f0Sxxhk/360-F-76510174-j-Io-Vj5sp-Ae-Ws-A9t-Ae37p-PQVW3u-UHXCR6.jpg",
        width: 420,
        height: 212,
    },
    {
        src: "https://i.ibb.co/rxkRXXS/maxresdefault.jpg",
        width: 320,
        height: 174,
        //   isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: "https://i.ibb.co/Wc2fNwB/maxresdefault-2.jpg",
        width: 320,
        height: 212,
        tags: [

            { value: "Toy Car", title: "Toy Car" },
        ],
        alt: "Toy Cars",
    },

    
    {
        src: "https://i.ibb.co/MkGgBBC/images.jpg",
        width: 600,
        height: 302,
    },
    {
        src: "https://i.ibb.co/XZjNSgb/nascar-001-1526584440.jpg",
        width: 300,
        height: 302,
    },
    {
        src: "https://i.ibb.co/T2KTf4Y/8c4fa4ce-c342-4f94-b2ab-0e3c4f0acafc-f88e4b34cde35d8c3d4e079f43f34803.jpg",
        width: 600,
        height: 400,
    },
    {
        src: "https://i.ibb.co/28mX1tt/Wooden-Car-Transporter-Child-Playing-With-Toy-Car-Trailer-96111.jpg",
        width: 500,
        height: 400,
    },
    {
        src: "https://i.ibb.co/m56sLJ8/100033-4.jpg",
        width: 600,
        height: 400,
    },
    {
        src: "https://i.ibb.co/SRZx4Rf/100033-2.jpg",
        width: 500,
        height: 300,
    },
    {
        src: "https://i.ibb.co/3MgV5xQ/71-DMxw31l-OL-AC-SX425.jpg",
        width: 700,
        height: 500,
    },
    {
        src: "https://i.ibb.co/87RSRdC/91-VLCa6-Kc-JL-SL1500-512x381.webp",
        width: 700,
        height: 500,
    },
    {
        src: "https://i.ibb.co/QjgXkJG/card-xlarge.webp",
        width: 600,
        height: 500,
    },
    {
        src: "https://i.ibb.co/6mCpR4Q/cars-construction-benefit-your-child-1200x1200.webp",
        width: 650,
        height: 500,
    },
    {
        src: "https://i.ibb.co/cJGLSst/maxresdefault-1.jpg",
        width: 600,
        height: 400,
    },
];


const GalleryImages = () => {
    return (
        <div className='p-5 bg-white'>
            <h2 className='text-center my-6 font-bold text-3xl uppercase text-gray-600'>gallery</h2>
            <div>
                <Gallery images={images} />
            </div>
        </div>
    );
};

export default GalleryImages;