import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Database } from 'bun:sqlite'

const sqlite = new Database('../../bin/database.db', {create: true})

const db = drizzle(sqlite)

export * from './schema'
export { db}
