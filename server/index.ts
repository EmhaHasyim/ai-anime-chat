import {Hono} from "hono";
import characterController from "./controller/character-controller.ts";
import {HTTPException} from "hono/http-exception";
import {ZodError} from "zod";
import {cors} from 'hono/cors'
import {prettyJSON} from "hono/pretty-json";
import {serveStatic} from "hono/bun";

const app = new Hono()
    .use(prettyJSON())
    .use('/api/*', cors())
    .get('/api', c => c.text('api by hono🔥🔥🔥'))
    .route('/api', characterController)
    .use('/images/*', serveStatic({root: './public'}))
    .use('*', serveStatic({root: './frontend/dist'}))
    .use('*', serveStatic({path: './frontend/dist/index.html'}))
    .onError(async (err, c) => {
        if (err instanceof HTTPException) {
            c.status(err.status)
            return c.json({
                errors: {
                    message: err.message
                }
            })
        } else if (err instanceof ZodError) {
            c.status(400)
            return c.json({
                errors: {
                    message: err.message
                }
            })
        } else {
            c.status(500)
            return c.json({
                errors: {
                    message: err.message
                }
            })
        }
    })


export default app
export type AppType = typeof app