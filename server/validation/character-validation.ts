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
    aiCommand: z.string().min(1).max(500),
})


const validateCharacterImage = z.object({
    character: z.string().transform((value, ctx) => {
        try {
            return JSON.parse(value);
        } catch (error) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'invalid json',
            });
            return z.NEVER
        }
    }).pipe(validateCharacterInsert),
    image: z.instanceof(File).refine(file => {
        const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/avif', 'image/webp'];
        return validTypes.includes(file.type);
    }, {
        message: "Image must be a valid image file (jpeg, png, gif, avif, webp)",
    }),
})

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-9][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const validateCharacterUpdate = z.object({
    id: z.string().regex(uuidRegex, 'Invalid UUID'),
    character: z.string().transform((c) => JSON.parse(c)).pipe(validateCharacterInsert),
    image: z.instanceof(File).refine(file => {
        const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/avif', 'image/webp'];
        return validTypes.includes(file.type);
    }, {
        message: "Image must be a valid image file (jpeg, png, gif, avif, webp)",
    }),
})

const validateCharacterDelete = z.object({
    id: z.string().regex(uuidRegex, 'Invalid UUID format')
})

export {
    validateCharacterSelect,
    validateCharacterInsert,
    validateCharacterImage,
    validateCharacterUpdate,
    validateCharacterDelete
}