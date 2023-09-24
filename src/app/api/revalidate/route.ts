import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const tag = request.nextUrl.searchParams.get('tag')

  if (secret !== process.env.SECRET_TOKEN) return new Response(JSON.stringify({ message: 'Invalid secret' }), { status:401 }) 
  if (!tag) return new Response(JSON.stringify({ message: 'Missing tag param' }), { status:400 }) 
  
  revalidateTag(tag)

  return new Response(JSON.stringify({ revalidated: true, now: Date.now() })) 
}