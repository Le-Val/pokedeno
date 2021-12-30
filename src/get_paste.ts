import type { Paste, RawPaste } from "./types/paste.ts";
import { parseRawStringToPokemon } from "./parser.ts";

export async function getRawPaste(id: string): Promise<RawPaste> {
  const paste = await fetch(`https://pokepast.es/${id}/json`);

  return paste.json();
}

export async function getPaste(id: string): Promise<Paste> {
  const { author, notes, paste, title } = await getRawPaste(id);

  return {
    data: { author, notes, title },
    paste: {
      pokes: parseRawStringToPokemon(paste),
    },
  };
}
