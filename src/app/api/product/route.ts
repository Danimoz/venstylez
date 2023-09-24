import { v2 as cloudinary } from 'cloudinary';
import os from 'os';
import path from 'path';
import fs from 'fs/promises';
import { db } from '@/lib/db';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST(request:Request){
  try {
    const body = await request.formData();
    const image = body.get('imageUrl') as File;
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes)

    // Put the buffer in a temporary directory
    const tempdir = os.tmpdir();
    const uploadDir = path.join(tempdir, `${image.name}`)
    fs.writeFile(uploadDir, buffer)

    // Upload the image to Cloudinary
    const imageUrl = await cloudinary.uploader.upload(uploadDir, { folder: 'venstylez' })
    fs.unlink(uploadDir)

    // Add Product to Database
    await db.product.create({
      data: {
        name: body.get('name') as string,
        description: body.get('description') as string,
        price: Number(body.get('price')),
        imageUrl: imageUrl.secure_url
      },
      select: {
        id: true
      }
    })
    
    return new Response(JSON.stringify({ message: 'Successfully Added Product' }), { status:201 }) 
  } catch (error) {
    console.error(error)
  }
}