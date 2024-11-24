const html = Deno.readTextFile("./index.html");
export default {
  async fetch() {
    return new Response(await html, { headers: { "content-type": "text/html" } });
  }
}
