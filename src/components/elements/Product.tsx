import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  product: Product
}

export default function ProductCard({ product }: ProductProps){
  return (
    <Link href={`/shop/${product.id}`} className="flex flex-col h-full rounded-3xl border hover:scale-105 transition-transform ease-out transition-200">
      <div>
        <Image src={product.imageUrl} alt={product.name} width={350} height={525} className="rounded-t-3xl duration-700 ease-in-out group-hover:opacity-75"/>
      </div>
      <div className="font-semibold flex items-center justify-between my-4 text-xl px-6">
        <p className="truncate">{product.name}</p>
        <p>₦{product.price}</p>
      </div>
      <p className="line-clamp-2 text-gray-600 px-6 py-4">{product.description}</p>
    </Link>
  )
}