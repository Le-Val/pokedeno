/*
 * creates a paste and returns the Url
 * NOTE: use parsePokemonToString() function to pass a pokemon object to the function
 */
export async function createPaste(
  paste: string,
  author?: string,
  notes?: string,
  title?: string
) {
  const { url } = await fetch(
    `https://pokepast.es/create?${author ? `author=${author}&` : ""}${notes ? `notes=${notes}&` : ""}${title ? `title=${title}&` : ""}paste=${paste}`,
    {
      method: "POST",
    }
  );
  return url;
}
