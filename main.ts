const html = Deno.readTextFile("./index.txt");
export default {
  async fetch() {
    return new Response(await html, { headers: { "content-type": "text/plain" } });
  }
}
