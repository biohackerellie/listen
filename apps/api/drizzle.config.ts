import {defineConfig} from "drizzle-kit"

export default defineConfig({
	dialect: "sqlite",
	schema: "./src/db/schema.ts",
	out: "./drizzle",
	dbCredentials: {
		url: "../../bin/database.db"
	}
})
