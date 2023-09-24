import ProductCard from "@/components/elements/Product"
import { db } from "@/lib/db"
import { notify } from "@/lib/utils"

async function getProducts() {
  try {
    const result = await db.product.findMany()
    return result
  } catch (error) {
    notify("error", "Can't get products at this time")
  }
}
export default async function Shop() {
  const products = await getProducts()
  console.log(products)

  return (
    <section className="px-12 md:px-28 my-6 py-6">
      <h2 className="text-5xl font-bold text-center my-6">Exciting Offers!!!</h2>

      <div className="flex flex-col md:flex-row gap-x-12 gap-y-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  )
}