# pokedeno
🐉 pokepast.es wrapper written in typescript for the Deno runtime

## usage:
```ts
import { createPaste, getPaste, parseTeamToString } from "https://deno.land/x/poke_deno@1.0.0/mod.ts";

// get the content from https://pokepast.es/debbc67dd4f7a6e8
const { paste, data } = await getPaste("debbc67dd4f7a6e8");

console.log(paste, data.title, data.author, data.notes);

// create a new paste
const content = parseTeamToString(paste.pokes);

// get the created url
const url = await createPaste("Le Val", content, "Note: gen5ou", "Sand balance");

console.log(url);
```
