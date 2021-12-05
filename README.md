# mubi-live

Get notified when a new film starts streaming at https://mubi.com/live.

The `check` workflow checks Mubi for the currently live streaming film, writing to the `film.json` file with the latest streaming film data. If the film has changed since the last check, a new issue is created with the details of the new film that is streaming.

Note: The live streaming program at https://mubi.com/live is country-specific. Currently the check is run from GitHub hosted Actions runners which to the best of my knowledge are all in Azure data centres in the USA.
