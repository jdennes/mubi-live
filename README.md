# mubi-live

Get notified when a new film starts streaming at https://mubi.com/live.

- The `check` workflow checks Mubi for the currently live streaming film, updating `film.json` if the streaming film has changed since the last check.
- The `notify` workflow runs on the `push` event for the `film.json` path, and creates a new issue with the details of the new film that is streaming.

Note: The live streaming program at https://mubi.com/live is country-specific as far as I can tell.
