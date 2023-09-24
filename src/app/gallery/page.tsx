import gallery1 from '@/images/gallery1.jpg'
import gallery2 from '@/images/gallery2.jpg'
import gallery3 from '@/images/gallery3.jpg'
import gallery4 from '@/images/gallery4.jpg'
import gallery5 from '@/images/gallery5.jpg'
import gallery6 from '@/images/gallery6.jpg'
import gallery7 from '@/images/gallery7.jpg'
import gallery8 from '@/images/gallery8.jpg'
import Image from 'next/image'

const galleryImages = [gallery1, gallery3, gallery4, gallery8, gallery6, gallery5, gallery7, gallery2]

export default function Gallery() {
  return (
    <section className="px-12 md:px-28 text-center my-12 py-12">
      <div className='grid grid-cols-1 my-6 md:my-12 gap-x-8 md:grid-cols-3 gap-6'>
        {
          galleryImages.map((image, idx) => (
            <div key={idx}>
              <Image src={image} alt='Gallery Image' className='rounded-3xl h-full hover:scale-90'/>
            </div>
          ))
        }
      </div>
    </section>
  )
}