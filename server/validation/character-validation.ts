import {z, ZodType} from "zod";

const characterValidationPost = z.object({
    name: z.string().min(1).max(255),
    description: z.string().min(1).max(255),
    img: z.string().min(1).max(255),
    aiCommand: z.string().min(1).max(500),
})

const characterValidationDelete = z.object({
    id: z.number()
})

export {characterValidationPost, characterValidationDelete}