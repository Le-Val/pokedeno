/*
 * creates a paste and returns the Url
 * NOTE: use parsePokemonToString() function to pass a pokemon object to the function
 */
export async function createPaste(author: string, paste: string, notes: string, title: string) {
  const { url } = await fetch(`https://pokepast.es/create?author=${author}&paste=${paste}&notes=${notes}&title=${title}`, {
    method: "POST"
  });
  return url;
}
