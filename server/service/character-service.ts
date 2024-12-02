import {characterTable} from "../db/schema/character-schema.ts";
import type {CharacterModel, CharacterSelectQuery} from "../model/character-model.ts";
import {eq, asc, desc} from 'drizzle-orm';
import db from "../db/db.ts";
import {HTTPException} from "hono/http-exception";

const selectCharacter = async (query: CharacterSelectQuery) => {
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
        case 'popularity':
            sortBy = characterTable.total_chat;
            break;
        case 'latest':
            sortBy = characterTable.created_at;
            orderBy = orderBy === asc ? desc : asc
            break;
        default:
            sortBy = characterTable.total_chat;
    }

    const select = await db
        .select()
        .from(characterTable)
        .where(gender ? eq(characterTable.gender, gender) : undefined)
        .orderBy(orderBy(sortBy))
        .execute()

    return {
        status: "success",
        success: true,
        message: "Character found successfully.",
        data: select
    }

}

const insertCharacter = async (character: CharacterModel) => {

    const insert = await db
        .insert(characterTable)
        .values({
            name: character.name,
            description: character.description,
            gender: character.gender,
            img: character.img,
            ai_command: character.aiCommand
        })
        .returning()

    return {
        status: "success",
        success: true,
        message: "Character added successfully.",
        data: insert[0]
    }

}

const deleteCharacter = async (id: string) => {
    const deleteC = await db
        .delete(characterTable)
        .where(eq(characterTable.id, id))
        .returning()

    if (deleteC.length === 0) {
        throw new HTTPException(404, {message: "character not found"})
    }

    return {
        success: true,
        data: deleteC[0],
        message: "Character deleted successfully.",
    }
}

export {insertCharacter, selectCharacter, deleteCharacter}