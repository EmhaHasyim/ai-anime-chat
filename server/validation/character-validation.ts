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

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-9][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const validateCharacterUpdate = z.object({
    id: z.string().regex(uuidRegex, 'Invalid UUID format'),
    name: z.string().min(1).max(255),
    description: z.string().min(1).max(255),
    gender: z.string().min(1).max(6),
    img: z.string().min(1).max(255),
    aiCommand: z.string().min(1).max(500),
})

const validateCharacterDelete = z.object({
    id: z.string().regex(uuidRegex, 'Invalid UUID format')
})

export {validateCharacterSelect, validateCharacterInsert, validateCharacterUpdate, validateCharacterDelete}