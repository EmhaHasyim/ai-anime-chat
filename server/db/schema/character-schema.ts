import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

const charactersTable = sqliteTable('characters', {
    id: text().primaryKey().$defaultFn(() => crypto.randomUUID()),
    name: text().notNull().unique(),
    description: text().notNull(),
    gender: text().notNull(),
    img: text().notNull(),
    total_chat: integer().notNull().default(0),
    ai_command: text().notNull(),
    createdAt: text().notNull().default(sql`(CURRENT_TIMESTAMP)`),
    editedAt: text().notNull().default(sql`(CURRENT_TIMESTAMP)`).$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
});

export default charactersTable