import {Hono} from "hono";
import {zValidator} from '@hono/zod-validator'
import {
    validateCharacterDelete,
    validateCharacterInsert,
    validateCharacterSelect,
    validateCharacterUpdate
} from "../validation/character-validation.ts";
import {deleteCharacter, insertCharacter, selectCharacter} from "../service/character-service.ts";

const characterController = new Hono().basePath('/character')
    .get('', zValidator(
        "query", validateCharacterSelect
    ), async (c) => {
        const query = c.req.valid('query')
        const select = await selectCharacter(query)
        if (!select.success) return c.json(select, 500)
        return c.json(select, 200)
    })
    .post('', zValidator(
        'json', validateCharacterInsert
    ), async (c) => {
        const character = c.req.valid('json')
        const insert = await insertCharacter(character)
        if (!insert.success) return c.json(insert, 500)
        return c.json(insert, 201)
    })
    .put('', zValidator(
        'json', validateCharacterUpdate
    ), async (c) => {
        const character = c.req.valid('json')

        return c.json({})
    })
    .delete('', zValidator(
        'json', validateCharacterDelete
    ), async (c) => {
        const data = await c.req.json()
        const id = data.id

        const deleteC = await deleteCharacter(id)

        return c.json(deleteC, 200)
    })


export default characterController;