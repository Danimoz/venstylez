'use client';

import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { BsTruck } from 'react-icons/bs';
import { BsLightningCharge } from 'react-icons/bs';
import { GrSecure } from 'react-icons/gr';
import { RiEqualizerFill } from 'react-icons/ri';
import { BiShoppingBag } from 'react-icons/bi';
import boyV from '@/images/boyv.jpeg';
import { Barlow } from 'next/font/google';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const barlow = Barlow({ subsets: ['latin'], weight: '400' })

const reasons = [
  {icon: AiOutlineHeart, title: 'Trusted', text: "Join our community of satisfied customers who have trusted us for years. We pride ourselves on delivering exceptional quality and service." },
  {icon: BsLightningCharge, title: 'Easy to Use', text: "Our user-friendly platform makes it a breeze to find the perfect fit. Whether you're selecting a standard size or making adjustments, tailoring your clothing has never been easier. Shop with confidence and enjoy a seamless shopping experience with us." },
  {icon: RiEqualizerFill, title: 'Personalization', text: "Create clothing that's uniquely yours. Select your preferred style, fabric, and details. Tailor your clothing to match your personality and preferences. "},
  {icon: GrSecure, title: 'Secure', text: "Shop with confidence on our secure platform. We use the latest encryption and security measures to protect your personal and payment information." },
  {icon: BsTruck, title: "Fast Delivery", text: "Need your new outfit in a hurry? We've got you covered. Enjoy our lightning-fast delivery service, ensuring you receive your tailored clothing promptly without compromising on quality. Shop today and experience the convenience of swift and reliable delivery."},
  {icon: BiShoppingBag, title: "Shopping", text: "Explore a wide range of high-quality clothing items. From classic to contemporary styles, we offer a diverse collection to suit your fashion needs."},
]

const reviews = [
  { img: boyV, name: 'Boy V', review: "Venstylez is a game-changer! Easy to use, sustainable, and lightning-fast delivery. I'm impressed by their quality and commitment. Highly recommended!" },
  { img: boyV, name: 'Daniel', review: "Venstylez exceeded my expectations. Quick, easy, and eco-friendly - what more could you ask for? I'm a satisfied customer!" },
  { img: boyV, name: 'Marrz', review: "Venstylez is top-notch! The perfect fit every time. Love their sustainable approach. A must-visit for fashion-conscious individuals" },
]

export default function WhyChooseUs() {
  const [currentReview, setCurrentReview] = useState(0);
  const goToNextImage = () => setCurrentReview((prevReview) => ( prevReview === reviews.length - 1 ? 0 : prevReview + 1 ))
  
  useEffect(() => {
    const interval = setInterval(goToNextImage, 7654);
    return () => clearInterval(interval)
  })

  return (
    <>
      <section className="px-12 md:px-28 text-center my-12 py-12">
        <h1 className='text-3xl md:text-5xl leading-10 py-6'>Why Choose Us</h1>
        <div className='flex justify-center gap-10'>
          <div className='w-48 h-0.5 relative'>
            <div className='w-48 h-0.5 left-0 flex justify-center top-0 absolute bg-orange-500'></div>
          </div>
        </div>

        <div className='grid grid-cols-1 my-6 md:my-12 md:grid-cols-3 gap-6'>
          {
            reasons.map((reason) => (
              <div key={reason.title} className='p-10 rounded-3xl shadow hover:shadow-2xl inline-flex flex-col items-start gap-6'>
                <reason.icon size={32} />
                <div className='flex flex-col text-left items-start gap-2'>
                  <h2 className='leading-9 text-2xl'>{reason.title}</h2>
                  <p className={`text-neutral-600 text-base ${barlow.className}`}>{reason.text}</p>
                </div>
              </div>
            ))
          }

        </div>
      </section>

      <section className="px-12 md:px-28 text-center my-12 py-8">
        <h1 className='text-3xl md:text-5xl leading-10 py-6'>Read What Our Clients Say</h1>
        <div className='flex justify-center gap-10'>
          <div className='w-48 h-0.5 relative'>
            <div className='w-48 h-0.5 left-0 flex justify-center top-0 absolute bg-orange-500'></div>
          </div>
        </div>

        <div className='md:flex gap-x-6 md:gap-x-12 items-center shadow my-4 p-10'>
          <div className='justify-center md:justify-start flex'>
            <Image className='rounded-full my-4' src={reviews[currentReview].img} alt={reviews[currentReview].name} width={160} height={170} />
          </div>

          <div className='flex flex-col gap-2 gap-y-4 mt-4 text-left items-start'>
            <div className='flex items-center gap-x-4'>
              <h2 className='text-3xl leading-9'>{reviews[currentReview].name}</h2>
              <div className='flex items-center'>
                <AiFillStar size={20} color='orange' />
                <AiFillStar size={20} color='orange' />
                <AiFillStar size={20} color='orange' />
                <AiFillStar size={20} color='orange' />
                <AiFillStar size={20} color='orange' />
              </div>
            </div>
            <p className={`text-zinc-800 text-xl leading-7 ${barlow.className}`}>{reviews[currentReview].review}</p>
          </div>
        </div>
      </section>
    </>
  )
}