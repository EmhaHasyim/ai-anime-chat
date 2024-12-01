import {z} from "zod";

const validateCharacterInsert = z.object({
    name: z.string().min(1).max(255),
    description: z.string().min(1).max(255),
    gender: z.string().min(1).max(6),
    img: z.string().min(1).max(255),
    aiCommand: z.string().min(1).max(500),
})

const characterValidationDelete = z.object({
    id: z.number()
})

export {validateCharacterInsert, characterValidationDelete}