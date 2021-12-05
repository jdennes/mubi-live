import { readJSON, writeJSON } from 'https://deno.land/x/flat@0.0.13/mod.ts'

const filename = Deno.args[0]
const data = await readJSON(filename)

const film = {
    title: data.film_programming.title,
    year: data.film_programming.year,
    web_url: data.film_programming.web_url,
    directors: data.film_programming.directors
}
await writeJSON("film.json", film)
