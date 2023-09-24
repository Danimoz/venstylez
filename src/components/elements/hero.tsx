'use client';

import Image from "next/image";
import slide1 from '@/images/slide1.png';
import slide2 from '@/images/slide2.png';
import slide3 from '@/images/slide3.png';
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [slide1, slide2, slide3]
  const goToNextImage = () => setCurrentImage((prevImage) => ( prevImage === images.length - 1 ? 0 : prevImage + 1 ))
  
  useEffect(() => {
    const interval = setInterval(goToNextImage, 6432);
    return () => clearInterval(interval)
  })

  return (
    <section className="pr-12 md:pr-24 pb-6 md:pb-12 pl-12 md:pl-28 bg-orange-600 bg-opacity-20">
      <div className="md:flex justify-center items-center">
        <div className="w-full mb-8 md:mr-24">
          <h1 className="text-3xl md:text-5xl pt-12 font-bold leading-relaxed tracking-wide md:tracking-wider">Elevate Your Style, Seamlessly Tailored for You</h1>
          <p className="my-8 leading-7 tracking-wide">
            We uphold a rigorous standard for production, consistently aiming to exceed our clients' expectations. Our clothing collections combine contemporary trends with top-notch quality.
          </p>
          <div className="flex gap-x-8 mt-8">
            <button className="px-8 py-3 bg-orange-500 rounded-2xl hover:scale-105">Explore</button>
            <button className="px-8 py-3 border-2 border-orange-500 rounded-2xl hover:scale-105">Contact Us</button>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Image alt="Hero Spotlight" src={images[currentImage]} />
        </div>
      </div>
    </section>
  )
}