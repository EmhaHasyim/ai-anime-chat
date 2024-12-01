type CharacterSelectQuery = {
    sort?: string;
    gender?: string;
    order?: string;
}

type CharacterModel = {
    id?: number;
    name: string;
    description: string;
    gender: string;
    img: string;
    totalChat?: number;
    aiCommand: string;
};

export type {CharacterModel, CharacterSelectQuery}