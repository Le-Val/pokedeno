/* Pokemon (one for each newline) */
export interface Pokemon {
  /* Ability */
  ability : string
  /* Nature */
  nature ?: PokemonNature
  /* Name of the Pokemon */
  name    : string
  /* The item that the Pokemon is holding */
  item   ?: string
  /* @see https://pokemon.fandom.com/wiki/Effort_Value */
  EVs    ?: string[]
  /* @see https://pokemon.fandom.com/wiki/Individual_Values */
  IVs    ?: string[]
  /* An array of pokemon moves, each one is given with a starting - */
  moves  ?: string[]
  /* Genre */
  genre  ?: string
}

/* male or female */
export type PokemonGenre = "(F)" | "(M)";

/* Utilities to parse natures */
export type PokemonNature =
  | "Adamant"
  | "Bashful"
  | "Bold"
  | "Brave"
  | "Calm"
  | "Careful"
  | "Docile"
  | "Gentle"
  | "Hardy"
  | "Hasty"
  | "Impish"
  | "Jolly"
  | "Lax"
  | "Lonely"
  | "Mild"
  | "Modest"
  | "Naive"
  | "Naughty"
  | "Quiet"
  | "Quirky"
  | "Rash"
  | "Relaxed"
  | "Sassy"
  | "Serious"
  | "Timid";
