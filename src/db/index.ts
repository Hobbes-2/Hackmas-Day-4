import "dotenv/config"
import { drizzle } from "drizzle-orm/bun-sqlite"

const { exec } = require("child_process")
exec("bunx drizzle-kit push", (error, stdout, stderr) => {
    if (error) {
        console.log("Error:", error.message);
    }
});
export const db = drizzle(process.env.DB_FILE_NAME)
