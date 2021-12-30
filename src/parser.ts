import type { Pokemon, PokemonGenre, PokemonNature } from "./types/pokemon.ts";

export function splitEachBlankNewline(s: string) {
  const m = s.split(/\r\n\r/g)
  return m.slice(0, m.length - 1).map((item) => item.trim());
}

export function parseName(s: string) {
  return /^[A-Z]\w+/g.exec(s)?.[0];
}

export function parseGenre(s: string) {
  // "(F)" | "(M)"
  return /\((F|M)\)/g.exec(s)?.[0] as PokemonGenre | undefined;
}

export function parseAbility(s: string) {
  return /(?:Ability:)(.+)/g.exec(s)?.[1]?.trim();
}

export function parseEvs(s: string) {
  return /(?:EVs:)(.+)/g.exec(s)?.[1]?.trim().split(" / ");
}

export function parseNature(s: string) {
  return /(.+)(Nature)/g.exec(s)?.[1]?.trim() as PokemonNature | undefined;
}

export function parseIvs(s: string) {
  return /(?:IVs:)(.+)/g.exec(s)?.[1]?.trim().split(" / ");
}

export function parseItem(s: string) {
  return /(?:@)(.+)/g.exec(s)?.[1]?.trim();
}

export function parseMoves(s: string) {
  // TODO: do not slice this
  return s.match(/(?:-)(.+){1,4}/g)?.map((str) => str.slice(1).trim());
}

export function parseRawStringToPokemon(dat: string) {
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
