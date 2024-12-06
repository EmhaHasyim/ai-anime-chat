import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

const characterTable = sqliteTable('characters', {
    id: text().primaryKey().$defaultFn(() => Bun.randomUUIDv7()),
    name: text().notNull(),
    description: text().notNull(),
    gender: text().notNull(),
    img: text().notNull(),
    totalChat: integer('total_chat').notNull().default(0),
    aiCommand: text('ai_command').notNull(),
    createdAt: text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
    editedAt: text('edited_at').notNull().default(sql`(CURRENT_TIMESTAMP)`).$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
});

export default characterTable