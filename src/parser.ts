import type { Pokemon, PokemonGenre, PokemonNature } from "./types/pokemon.ts";

/* Separates each pokemon out of the team */
export function splitEachBlankNewline(s: string) {
  const m = s.split(/\r\n\r/g);
  return m.slice(0, m.length - 1).map((item) => item.trim());
}

/* Search for pokemon name in a given string */
export function parseName(s: string) {
  return /^[A-Z]\w+/g.exec(s)?.[0];
}

/* Search for a genre in a given string */
export function parseGenre(s: string) {
  // "(F)" | "(M)"
  return /\((F|M)\)/g.exec(s)?.[0] as PokemonGenre | undefined;
}

/* Search for an ability in a given string */
export function parseAbility(s: string) {
  return /(?:Ability:)(.+)/g.exec(s)?.[1]?.trim();
}

/* Search for evs in a given string */
export function parseEvs(s: string) {
  return /(?:EVs:)(.+)/g.exec(s)?.[1]?.trim().split(" / ");
}

/* Search for a nature in a given string */
export function parseNature(s: string) {
  return /(.+)(Nature)/g.exec(s)?.[1]?.trim() as PokemonNature | undefined;
}

/* Search for ivs in a given string */
export function parseIvs(s: string) {
  return /(?:IVs:)(.+)/g.exec(s)?.[1]?.trim().split(" / ");
}

/* Search for an item in a given string */
export function parseItem(s: string) {
  return /(?:@)(.+)/g.exec(s)?.[1]?.trim();
}

/* Search for moves in a given string */
export function parseMoves(s: string) {
  // TODO: do not slice this
  return s.match(/(?:-)(.+){1,4}/g)?.map((str) => str.trim());
}

/* parse a string to a Pokemon object */
export function parseStringToPokemon(dat: string) {
  return splitEachBlankNewline(dat).map((str, i) => {
    return {
      name: parseName(str),
      ability: parseAbility(str),
      nature: parseNature(str),
      item: parseItem(str),
      IVs: parseIvs(str),
      EVs: parseEvs(str),
      moves: parseMoves(str),
      genre: parseGenre(str),
    } as Pokemon;
  });
}

/* Parse a Pokemon object to a string */
export function parseTeamToString(pokes: Pokemon[]) {
  let out = "";

  for (const poke of pokes) {
    // set name
    if (poke.item) {
      out += `${poke.name} @ ${poke.item}\n`;
      if (poke.genre) {
        out += `${poke.name} @ ${poke.item}\n`;
      }
    } else {
      out += `${poke.name}\n`;
      if (poke.genre) {
        out += `${poke.name} @ ${poke.item}\n`;
      }
    }

    // set ability
    out += `Ability: ${poke.ability}\n`;

    // set EVs & IVs
    if (poke.EVs && poke.EVs.length > 0) {
      out += `EVs ${poke.EVs.join(" /")}\n`;
    }
    if (poke.IVs && poke.IVs.length > 0) {
      out += `IVs ${poke.IVs.join(" /")}\n`;
    }

    // set nature
    if (poke.nature) {
      out += `${poke.nature} Nature\n`;
    }

    // movs
    if (poke.moves && poke.moves.length > 0) {
      out += poke.moves.join("\n");
    }

    // re-join the given strings
    out += "\r\n\r";
  }
  return out;
}
