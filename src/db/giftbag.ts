import { db } from "./index"
import { presents } from "./schema"
import { eq, desc } from "drizzle-orm"

//Shows the list of unanswered presents
export function listPresents() {
    return db.select().from(presents).orderBy(desc(presents.id)).all()
}

//Creates a request
export function createPresent(item: string)
{
    const createdAt = Math.floor(Date.now() / 1000)

    const res = db.insert(presents).values({
        item,
        fulfilled: 0,
        createdAt,
    }).run()

    return { id: Number(res.lastInsertRowid) }
}

//The user recieves their present
export function recievePresent(id: number)
{
    const res = db.update(presents)
    .set({ fulfilled: 1 })
    .where(eq(presents.id, id))
    .run()

    return { changes: res.changes }
}

//Removes a request for a present
export function burnPresent(id: number)
{
    const res = db.delete(presents).where(eq(presents.id, id)).run()
    return { changes: res.changes }
}

//Fufills a present requested by someone else
export function givePresent(id: number)
{
    const res = db.update(presents)
    .set({ fulfilled: 1 })
    .where(eq(presents.id, id))
    .run()

    return { changes: res.changes }
}
