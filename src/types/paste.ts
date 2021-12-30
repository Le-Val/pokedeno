import type { Pokemon } from "./pokemon.ts";

/* url for the webside the routes are "/" and "/create" */
export type Url = "https://pokepast.es";

/* Paste given by the API */
export interface RawPaste {
  /* The author of the paste (could be an empty string) */
  author : string
  /* The notes given by the author (could be an empty string) */
  notes  : string
  /* Paste content (at least 1 character) */
  paste  : string
  /* Title of the paste */
  title  : string
}

/* Parsed pokepaste */
export interface Paste {
  /* The raw paste data */
  data: Omit<RawPaste, "paste">
  /* The parsed pokepaste */
  paste: {
    /* pokes tuple (max of 6 pokemon for each team) */
    pokes: Pokemon[]
  }
}
