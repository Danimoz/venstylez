import { db } from "@/lib/db";

interface PageProps {
  params: {
    id: string
  }
}

export async function GET({ params: {id}}: PageProps){
  try {
    if (isNaN(Number(id))) throw new Error('Invalid Item Id')
    const item = await db.product.findUnique({
      where: {
        id: Number(id)
      }
    })
    if (!item) return new Response('Item not found', { status: 404 })
    return new Response(JSON.stringify(item), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error fetching Item' }), { status: 500 })
  }
}