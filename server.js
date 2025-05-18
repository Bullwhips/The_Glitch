import { serveDir, serveFile } from "jsr:@std/http/file-server";

let GRUPPER = [];

try {
  const grupperData = await Deno.readTextFile("./game/database/database.json");
  GRUPPER = JSON.parse(grupperData);
} catch (e) {
  console.error("Failed to load grupper:", e);
  GRUPPER = [];
}

async function updateDatabase(grupper) {
  const grupperData = JSON.stringify(grupper, null, 2);
  await Deno.writeTextFile("./game/database/database.json", grupperData);
}

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
      return new Response(JSON.stringify(GRUPPER), { headers: corsHeaders });
    }

    if (request.method === "POST") {
      const grupp = await request.json();
      grupp.id = GRUPPER.reduce((acc, next) => (next.id > acc ? next.id : acc), 0) + 1;
      GRUPPER.push(grupp);
      await updateDatabase(GRUPPER);
      return new Response(JSON.stringify(grupp), { headers: corsHeaders });
    }

    if (request.method === "DELETE") {
      const data = await request.json();
      const index = GRUPPER.findIndex(grupp => grupp.id === data.id);

      if (index === -1) {
        return new Response(JSON.stringify({ error: "Not found" }), { status: 404, headers: corsHeaders });
      }

      const removed = GRUPPER.splice(index, 1)[0];
      await updateDatabase(GRUPPER);
      return new Response(JSON.stringify(removed), { headers: corsHeaders });
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
