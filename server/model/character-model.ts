import {z} from "zod";
import {
    validateCharacterDelete,
    validateCharacterInsert,
    validateCharacterSelect,
    validateCharacterUpdate
} from "../validation/character-validation.ts";

type CharacterSelect = z.infer<typeof validateCharacterSelect>

type CharacterInsert = z.infer<typeof validateCharacterInsert>

type CharacterUpdate = z.infer<typeof validateCharacterUpdate>

type CharacterDelete = z.infer<typeof validateCharacterDelete>


type CharacterModel = {
    id?: number;
    name: string;
    description: string;
    gender: string;
    img: string;
    totalChat?: number;
    aiCommand: string;
};

export type {CharacterModel, CharacterSelect, CharacterInsert, CharacterUpdate, CharacterDelete}