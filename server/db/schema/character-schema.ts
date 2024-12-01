import {integer, pgTable, varchar, text, bigint, timestamp, uuid} from "drizzle-orm/pg-core";

export const characterTable = pgTable('characters', {
    id: uuid('id').defaultRandom(),
    name: varchar({length: 255}).notNull(),
    description: varchar({length: 255}).notNull(),
    gender: varchar({length: 6}).notNull(),
    img: varchar({length: 255}).notNull(),
    total_chat: bigint({mode: "number"}).default(0).notNull(),
    ai_command: text().notNull(),
    created_at: timestamp().defaultNow().notNull(),
    edited_at: timestamp().defaultNow().notNull()
});

