import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at leas 2 characters').max(100, 'Name cannot exceed 100 characters'),
  email: z.string().email('Invaid email address'),
  phone: z.string().min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number cannot exceed 15 characters").refine((value) => value.startsWith('+'), { message: "Phone number must start with a + sign"}),
  message: z.string().min(5, 'Messge must be at least 5 characters')
})

export type ContactFormType = z.infer<typeof contactSchema>;
const MAX_SIZE = 1024 * 1024 * 3
export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().min(0),
  imageUrl: z.any()
    .refine((files) => files?.[0]?.size <= MAX_SIZE, 'Max file size is 3MB')})

export type ProductFormType = z.infer<typeof productSchema>

