'use client';

import { SlLocationPin } from 'react-icons/sl';
import { RiTwitterXFill } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/lib/schemas';
import type { ContactFormType } from '@/lib/schemas';

const socialLinks = [
  { name:'Location', address:"22 Jagunmolu Street, Bariga Lagos", icon: SlLocationPin },
  { name:'Follow us on X', link:"https://twitter.com/VENSTYLEZ45", icon:RiTwitterXFill },
  { name:'Follow us on Instagram', link:"https://www.instagram.com/venstylez/", icon:BsInstagram },
]

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting }} = useForm<ContactFormType>({
    defaultValues: { name: '', email: '', phone: '', message: ''},
    resolver:zodResolver(contactSchema)
  })

  return (
    <section id='contact' className="px-12 md:px-28 text-center my-12 py-12">
      <h1 className='text-3xl md:text-5xl leading-10 py-6'>Get In Touch</h1>
      <div className='flex justify-center gap-10'>
        <div className='w-48 h-0.5 relative'>
          <div className='w-48 h-0.5 left-0 flex justify-center top-0 absolute bg-orange-500'></div>
        </div>
      </div>

      <div className="md:flex gap-x-14 p-10">
        <div className='w-full'>
          <p className='leading-8 text-start'>Have a question? Our team is here to assist you. Feel free to reach out anytime, and we'd be delighted to welcome you to our atelier.</p>

          <div>
            {
              socialLinks.map((link) => (
                <div className='flex my-8 items-center gap-8'>
                  <link.icon size={30} />
                  {link.link ?
                    <Link href={link.link}>{link.name}</Link>
                    :
                    <p>{link.address}</p>
                  }
                </div>
              ))
            }
          </div>
        </div>

        <form className='w-full p-2'>
          <div>
            <input type='text' className='p-3 rounded-xl w-full border border-orange-500 mb-4' disabled={isSubmitting} placeholder='Your Name' {...register('name')} required />
            {errors.name?.message && (
              <div className='text-red-500'>{errors.name?.message}</div>
            )}
          </div>
          <div>
            <input type='email' className='p-3 rounded-xl w-full border border-orange-500 mb-4' disabled={isSubmitting} placeholder='Email' {...register('email')} required />
            {errors.email?.message && (
              <div className='text-red-500'>{errors.email?.message}</div>
            )}
          </div>
          <div>
            <input type='text' className='p-3 rounded-xl w-full border border-orange-500 mb-4' disabled={isSubmitting} placeholder='Phone Number' {...register('phone')} required />
            {errors.phone?.message && (
              <div className='text-red-500'>{errors.phone?.message}</div>
            )}
          </div>
          <div>
            <textarea className='p-3 rounded-xl w-full border border-orange-500 mb-4' disabled={isSubmitting} placeholder='Your Message' {...register('message')} required />
            {errors.message?.message && (
              <div className='text-red-500'>{errors.message?.message}</div>
            )}
          </div>
          <div className='flex justify-end'>
            <button className='inline-flex bg-orange-500 text-white p-4 rounded-xl' disabled={isSubmitting}> Send Message </button>
          </div>
        </form>
      </div>
    </section>
  )
}