import {z, ZodType} from "zod";

const characterValidationPost = z.object({
    id: z.number(),
    name: z.string().min(1).max(255),
    birthDay: z.string().min(1).max(255),
    bloodType: z.string().min(1).max(255),
    height: z.string().min(1).max(255),
    img: z.string().min(1).max(255),
    aiCommand: z.string().min(1).max(500),
})

const characterValidationDelete = z.object({
    id: z.number()
})

export {characterValidationPost, characterValidationDelete}