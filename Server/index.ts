import {Hono} from "hono";
import {z} from "zod";
import {zValidator} from "@hono/zod-validator";

const schema = z.object({
    name: z.string(),
})

const app = new Hono()
    .get('/api', c => c.text('api by hono🔥🔥🔥'))
    .post('/zod', zValidator('json', schema), async (c) => {
        const validated = c.req.valid('json')
        return c.text(`Hello ${validated.name}`)
    })

export type AppType = typeof app