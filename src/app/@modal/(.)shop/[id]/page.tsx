'use client';

import Modal from "@/components/elements/Modal"
import Image from "next/image";
import { notFound } from "next/navigation"
import { useQuery } from "@tanstack/react-query";

interface PageProps {
  params: {
    id: string
  }
}

async function getItems(id:string) {
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/product/${id}`)
  return data.json()
}

export default function ProductModal({ params: { id }}: PageProps) {
  const { data:item } = useQuery({
    queryFn: () => getItems(id),
    queryKey: ['get-single-item']
  })
  console.log(item)

  return (
    <Modal>
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
    </Modal>
  )
}