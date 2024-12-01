import {z} from "zod";

const validateCharacterSelect = z.object({
    sort: z.enum(['name', 'popular', 'latest']).optional(),
    gender: z.enum(['male', 'female']).optional(),
    order: z.enum(['asc', 'desc']).optional(),
    name: z.string().optional()
})

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

export {validateCharacterInsert, characterValidationDelete, validateCharacterSelect}