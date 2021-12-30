import type { Paste, RawPaste } from "./types/paste.ts";
import { parseStringToPokemon } from "./parser.ts";

/* gets the raw content from a paste */
export async function getRawPaste(id: string): Promise<RawPaste> {
  const paste = await fetch(`https://pokepast.es/${id}/json`);

  return paste.json();
}

/* gets a paste */
export async function getPaste(id: string): Promise<Paste> {
  const { author, notes, paste, title } = await getRawPaste(id);

  return {
    data: { author, notes, title },
    paste: {
      pokes: parseStringToPokemon(paste),
    },
  };
}
