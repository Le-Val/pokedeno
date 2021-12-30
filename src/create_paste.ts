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
    `https://pokepast.es/create?paste=${paste}${author ? `&author=${author}` : ""}${notes ? `&notes=${notes}` : ""}${title ? `&title=${title}` : ""}`,
    {
      method: "POST",
    }
  );
  return url;
}
