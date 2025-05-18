import { serveDir, serveFile } from "jsr:@std/http/file-server";
const kv = await Deno.openKv();



// async function updateDatabase(grupper) {
//   const grupperData = JSON.stringify(grupper, null, 2);
//   await Deno.writeTextFile("./game/database/database.json", grupperData);
// }

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
};

async function handleRequest(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname.startsWith("/static")) {
    return serveDir(request, {
      fsRoot: "game",
      urlRoot: "static"
    });
  }

  if (pathname === "/api/grupper") {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method === "GET") {
        const grupps = [];

        for await (const entry of kv.list({ prefix: ["grupp"] })) {
        grupps.push(entry.value);
  }

        return new Response(JSON.stringify(grupps), corsHeaders);
    }

     if (request.method === "POST") {
  
    const grupp = await request.json();

     // Generate a unique ID (you can also use a timestamp or UUID here)
    const id = crypto.randomUUID();
     grupp.id = id;

     // Store the group in KV under key: ["grupp", id]
     await kv.set(["grupp", id], grupp);

     return new Response(JSON.stringify(grupp), {
     headers: corsHeaders
  });
}


if (request.method === "DELETE") {
  const data = await request.json();
  const key = ["grupp", data.id];

  const existing = await kv.get(key);
  if (!existing.value) {
    return new Response("", { status: 404 });
  }

  await kv.delete(key);
  return new Response(JSON.stringify(existing.value), corsHeaders);
}
  }

  if (pathname.endsWith(".mp3")) {
    const filePath = `./game${pathname}`;
    return serveFile(request, filePath, {
      headers: {
        "Content-Type": "audio/mpeg"
      }
    });
  }

  return serveFile(request, "./game/index.html");
}

Deno.serve(handleRequest);
