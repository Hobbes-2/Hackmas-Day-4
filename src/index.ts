import { Hono } from "hono"

const app = new Hono()

app.get("/", (c) => c.text("testing!"))

import { createPresent, burnPresent, recievePresent, listPresents, givePresent } from "./db/giftbag"

app.get("/api/presents", (c) => c.json(listPresents()))

app.post("/api/presents", async (c) => {
  const body = await c.req.json().catch(() => null)
  const item = (body?.item ?? "").toString().trim()
  if (!item) return c.json({ error: "item is required" }, 400)

    return c.json(createPresent(item), 201)
})

app.patch("/api/presents/:id/fulfill", (c) => {
  const id = Number(c.req.param("id"))
  if (!Number.isFinite(id)) return c.json({ error: "bad id" }, 400)

    const res = givePresent(id)
    if (res.changes === 0) return c.json({ error: "not found" }, 404)

      return c.json({ ok: true })
})

app.delete("/api/presents/:id", (c) => {
  const id = Number(c.req.param("id"))
  if (!Number.isFinite(id)) return c.json({ error: "bad id" }, 400)

    const res = burnPresent(id)
    if (res.changes === 0) return c.json({ error: "not found" }, 404)

      return c.json({ ok: true })
})

const port = Number(process.env.PORT) || 3000

export default {
  port,
  fetch: app.fetch,
}
