import {characterTable} from "../db/schema/character-schema.ts";
import type {CharacterModel} from "../model/character-model.ts";
import db from "../db/db.ts";


const insertCharacter = async (character: CharacterModel) => {
    try {
        const insert = await db.insert(characterTable).values({
            name: character.name,
            description: character.description,
            img: character.img,
            aiCommand: character.aiCommand
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

export {insertCharacter}