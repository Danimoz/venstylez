'use client'

import { ProductFormType, productSchema } from "@/lib/schemas"
import { notify } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

export default function AddProduct() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ProductFormType>({
    resolver: zodResolver(productSchema),
    defaultValues: { name: '', description: '', price: 0, imageUrl: undefined}
  })


  const onSubmit: SubmitHandler<ProductFormType> = async(data) => {
    const formData = new FormData();
    formData.set('name', data.name);
    formData.set('description', data.description);
    formData.set('price', data.price.toString());
    if (data.imageUrl instanceof FileList) {
      for (let i=0; i < data.imageUrl.length; i++){
        formData.append('imageUrl', data.imageUrl[i])
      }
    }

    try{
      await fetch('/api/product', {
        method: 'POST',
        body: formData
      })
      notify("success", "Successfully Added")
    } catch (error) {
      console.log(error)
      notify("error", "Could not add product at this time")
    }
  }

  return (
    <section className="px-12 md:px-28 my-12 py-12">
      <h1 className="text-center my-6 text-4xl font-bold">New Products</h1>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-4 font-semibold">Name</label>
          <input 
            type="text"
            id="name"
            disabled={isSubmitting}
            className="w-full p-4 border border-orange-300 rounded"
            placeholder="Name"
            {...register('name')}
            required
          />
          {errors.name?.message && (
            <div className="text-red-500">{errors.name?.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-4 font-semibold">Description</label>
          <input 
            type="text"
            id="description"
            disabled={isSubmitting}
            className="w-full p-4 border border-orange-300 rounded"
            placeholder="Description"
            {...register('description')}
            required
          />
          {errors.description?.message && (
            <div className="text-red-500">{errors.description?.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block mb-4 font-semibold">Price</label>
          <input 
            type="number"
            id="price"
            min={0}
            step={0.01}
            disabled={isSubmitting}
            className="w-full p-4 border border-orange-300 rounded"
            placeholder="Price"
            {...register('price', {valueAsNumber: true})}
            required
          />
          {errors.price?.message && (
            <div className="text-red-500">{errors.price?.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className="block mb-4 font-semibold">Image</label>
          <input 
            type="file"
            id="imageUrl"
            accept=".jpg, .jpeg, .png, .webp"
            disabled={isSubmitting}
            className="w-full p-4 border border-orange-300 rounded"
            {...register('imageUrl')}
            required
          />
          {errors.imageUrl?.message && (
            <div className="text-red-500">{errors.imageUrl?.message as any}</div>
          )}
        </div>

        <div className="flex justify-center">
          <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  )
}