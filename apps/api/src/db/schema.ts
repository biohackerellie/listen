import { integer, text, sqliteTable } from 'drizzle-orm/sqlite-core'

export const books = sqliteTable('books', {
	id: text('text'),
	etag: text('text'),
	title: text('text'),
	authors: text('text'),
	publisher: text('text'),
	publishedDate: text('text'),
	description: text('text'),
	pageCount: integer('integer'),
	categories: text('text'),
	averageRating: integer('integer'),
	ratingsCount: integer('integer'),
	imageLinks: text('text'),
	language: text('text'),
})


export const music = sqliteTable('music', {
	id: text('text'),
	etag: text('text'),
	title: text('text'),
	authors: text('text'),
	publisher: text('text'),
	publishedDate: text('text'),
	description: text('text'),
	pageCount: integer('integer'),
	categories: text('text'),
	averageRating: integer('integer'),
	ratingsCount: integer('integer'),
	imageLinks: text('text'),
})

export const podcasts = sqliteTable('podcasts', {
	id: text('text'),
	name: text('text'),
	description: text('text'),
	episode: text('text'),
	rss: text('text'),
	image: text('text'),
})



