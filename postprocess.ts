import { readJSON, writeJSON } from 'https://deno.land/x/flat@0.0.13/mod.ts'

const filename = Deno.args[0]
const data = await readJSON(filename)

const film = {
    title: data.film_programming.title,
    year: data.film_programming.year,
    country: data.film_programming.country,
    web_url: data.film_programming.web_url,
    directors: data.film_programming.directors,
    excerpt: data.film_programming.excerpt,
}
await writeJSON("film.json", film)
