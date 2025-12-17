import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"

export const presents = sqliteTable("presents", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    item: text("item").notNull(),
    fulfilled: integer("fulfilled").notNull().default(0),
    fulfilledName: text("name").notNull(),
    createdAt: integer("created_at").notNull(),
})
