import {Hono} from "hono";
import {zValidator} from '@hono/zod-validator'
import {characterValidationDelete, characterValidationPost} from "../validation/character-validation.ts";

const characterController = new Hono().basePath('/character')
    .get('/', (c) => {

        return c.json({
            character: [
                {
                    id: 1,
                    name: 'Naruto',
                    birthDay: 'October 10',
                    bloodType: 'B',
                    height: '174',
                    img: 'https://random.imagecdn.app/800/1300',
                    aiCommand: 'dummy data'
                },
                {
                    id: 2,
                    name: 'Naruto',
                    birthDay: 'October 10',
                    bloodType: 'B',
                    height: '174',
                    img: 'https://random.imagecdn.app/800/1300',
                    aiCommand: 'dummy data'
                }
            ]
        })
    })
    .post('/', zValidator(
        'json', characterValidationPost
    ), (c) => {

        return c.json({
            message: 'successes add character'
        })
    })
    .delete('/', zValidator(
        'json', characterValidationDelete
    ), async (c) => {
        const data = await c.req.json()
        const id = data.id

        return c.json({
            message: `successes delete character ${id}`
        })
    })


export default characterController;