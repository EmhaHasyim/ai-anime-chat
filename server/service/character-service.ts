import characterTable from '../db/schema/character-schema.ts'
import type {
    CharacterSelect,
    CharacterInsert,
    CharacterDelete
} from "../model/character-model.ts";
import {eq, asc, desc} from 'drizzle-orm';
import db from "../db/db.ts";
import {HTTPException} from "hono/http-exception"



const selectCharacter = async (query: CharacterSelect) => {
    const {sort, gender, order} = query;

    let orderBy;
    let sortBy;

    switch (order) {
        case 'asc':
            orderBy = asc;
            break;
        case 'desc':
            orderBy = desc;
            break;
        default:
            orderBy = asc;
    }

    switch (sort) {
        case 'name':
            sortBy = characterTable.name;
            break;
        case 'popular':
            sortBy = characterTable.totalChat;
            break;
        case 'latest':
            sortBy = characterTable.createdAt;
            orderBy = orderBy === asc ? desc : asc
            break;
        default:
            sortBy = characterTable.totalChat;
    }

    const select = await db
        .select()
        .from(characterTable)
        .where(gender ? eq(characterTable.gender, gender) : undefined)
        .orderBy(orderBy(sortBy))
        .execute()

    if (select.length === 0) throw new HTTPException(404, {message: "character not found"})

    return {
        data: select
    }

}

const insertCharacter = async (character: CharacterInsert, imageUrl: string) => {

    const {name, description, gender, aiCommand} = character

    const insert = await db
        .insert(characterTable)
        .values({
            name: name,
            description: description,
            gender: gender,
            img: imageUrl,
            aiCommand: aiCommand
        })
        .returning()

    return {
        data: insert
    }

}

const updateCharacter = async (character: CharacterInsert,id: string, imageUrl: string) => {
    console.log(id)

    const {name, description, gender, aiCommand} = character

    const update = await db
        .update(characterTable)
        .set({
            name: name,
            description: description,
            gender: gender,
            img: imageUrl,
            aiCommand: aiCommand
        })
        .where(eq(characterTable.id, `${id}`))
        .returning()

    if (update.length === 0) throw new HTTPException(404, {message: "character not found"})

    console.info(update)
    return {
        data: update
    }
}

const deleteCharacter = async (id: CharacterDelete) => {

    const deleteC = await db
        .delete(characterTable)
        .where(eq(characterTable.id, id.id))
        .returning()

    if (deleteC.length === 0) throw new HTTPException(404, {message: "character not found"})

    return {
        data: deleteC
    }
}

export {insertCharacter, selectCharacter, deleteCharacter, updateCharacter}