import {characterTable} from "../db/schema/character-schema.ts";
import type {CharacterModel, CharacterSelectQuery} from "../model/character-model.ts";
import {eq, asc, desc} from 'drizzle-orm';
import db from "../db/db.ts";

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

    try {
        const select = await db.select()
            .from(characterTable)
            .where(gender ? eq(characterTable.gender, gender) : undefined)
            .orderBy(orderBy(sortBy))
            .execute()

        return {
            status: "success",
            success: true,
            message: "Character search successfully.",
            data: select
        }
    } catch (err) {
        return {
            status: "error",
            success: false,
            message: "Gagal mendapatkan karakter",
            error: err
        }
    }
}

const insertCharacter = async (character: CharacterModel) => {
    try {
        const insert = await db.insert(characterTable).values({
            name: character.name,
            description: character.description,
            gender: character.gender,
            img: character.img,
            ai_command: character.aiCommand
        }).returning()
        return {
            status: "success",
            success: true,
            message: "Character added successfully.",
            data: insert[0]
        }
    } catch (err) {
        return {
            status: "error",
            success: false,
            message: "Gagal menambahkan karakter. Silakan periksa data yang Anda masukkan. Atau Hubungi .....",
            error: err
        }

    }
}


export {insertCharacter, selectCharacter}