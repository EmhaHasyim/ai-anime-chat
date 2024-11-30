import {integer, pgTable, varchar, text, bigint} from "drizzle-orm/pg-core";

export const characterTable = pgTable('characters', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({length: 255}).notNull(),
    description: varchar({length: 255}).notNull(),
    img: varchar({length: 255}).notNull(),
    totalChat: bigint({mode: "number"}).default(0).notNull(),
    aiCommand: text().notNull(),
});

