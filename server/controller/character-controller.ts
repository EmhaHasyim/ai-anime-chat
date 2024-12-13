import {Hono} from "hono";
import {zValidator} from '@hono/zod-validator'
import constructImageUrl from "../utils/constructImageUrl.ts";
import {
    validateCharacterDelete, validateCharacterImage,
    validateCharacterSelect,
    validateCharacterUpdate
} from "../validation/character-validation.ts";
import {deleteCharacter, insertCharacter, selectCharacter, updateCharacter} from "../service/character-service.ts";
import saveImage from "../utils/saveImage.ts";
import {join} from 'path';

const characterController = new Hono().basePath('/character')
    .get('', zValidator(
        "query", validateCharacterSelect
    ), async (c) => {
        const query = c.req.valid('query')
        const select = await selectCharacter(query)
        return c.json(select, 200)
    })
    .post('', zValidator('form', validateCharacterImage), async (c) => {

        const {image, character} = c.req.valid('form');
        const uploadDir = join(process.cwd(), 'public', 'images');
        await saveImage(image, uploadDir)
        const imageUrl = `/images/${image.name}`;
        const fullUrl = constructImageUrl(c, imageUrl);

        const insert = await insertCharacter(character, fullUrl)
        return c.json(insert, 201)
    })
    .put('', zValidator(
        'form', validateCharacterUpdate
    ), async (c) => {
        const {id, character, image} = c.req.valid('form')
        const uploadDir = join(process.cwd(), 'public', 'images');
        await saveImage(image, uploadDir)
        const imageUrl = `/images/${image.name}`;
        const fullUrl = constructImageUrl(c, imageUrl);

        const update = await updateCharacter(character, id, fullUrl)
        return c.json(update, 200)
    })
    .delete('', zValidator(
        'json', validateCharacterDelete
    ), async (c) => {
        const id = c.req.valid('json')

        const deleteC = await deleteCharacter(id)

        return c.json(deleteC, 200)
    })


export default characterController;