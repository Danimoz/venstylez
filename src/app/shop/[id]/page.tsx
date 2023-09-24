import { db } from "@/lib/db"
import Image from "next/image"
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    id: string
  }
}


async function getItem(id:string){
  try {
    if (isNaN(Number(id))) throw new Error('Invalid Item Id')
    const item = await db.product.findUnique({
      where: {
        id: Number(id)
      }
    })
    if (!item) notFound()
    return item
  } catch (error) {
    throw error;
  }
}

export default async function ShopItem({params: {id}}:PageProps) {
  const item = await getItem(id)
  console.log(item)
  return (
    <section className="px-12 md:px-28 my-6 py-6 flex flex-col md:flex-row gap-8 items-center">
      <Image src={item.imageUrl} alt={item.name} width={350} height={525} className="rounded-t-3xl transition duration-700 ease-in-out hover:opacity-60"/>

      <div className="divide-y divide-orange-500 w-full p-2">
        <div className="space-y-2 pb-8">
          <h1 className="text-2xl md:text-4xl font-bold">{item.name}</h1>
          <h1 className="text-gray-500 font-bold text-xl md:text-3xl">₦{item.price.toLocaleString()}</h1>
        </div>

        <div className="pt-8">
          <p className="text-sm">{item.description}</p>
        </div>
      </div>
    </section>
  )
}