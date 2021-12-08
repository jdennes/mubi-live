---
name: New film
about: Template for a new film streaming at https://mubi.com/live
title: '"{{ env.TITLE }}" is now showing at https://mubi.com/live'
labels: film
---
"{{ env.TITLE }}" is now showing at https://mubi.com/live

- Year: {{ env.YEAR }}
- Country: {{ env.COUNTRY }}
- Directed by: {{ env.DIRECTORS }}
- On Mubi: {{ env.WEB_URL }}
- Excerpt:

  > {{ env.EXCERPT }}
