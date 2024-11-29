import {Hono} from "hono";
import characterController from "./controller/character-controller.ts";

const app = new Hono()
    .get('/api', c => c.text('api by hono🔥🔥🔥'))
    .route('/api', characterController)


export default app
export type AppType = typeof app