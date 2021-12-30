import { getPaste } from "./src/get_paste.ts"

export * from "./src/parser.ts";
export * from "./src/get_paste.ts";
export * from "./src/create_paste.ts";
export * from "./src/types/paste.ts";
export * from "./src/types/pokemon.ts";

export default function find(url: string) {
  return getPaste(url);
}
