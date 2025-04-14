import { serveDir, serveFile } from "jsr:@std/http/file-server";

let GRUPPER = [ {
    "name": "Grupp 1",
    "time": "01:30:26"
    },
    {
     "name": "Grupp 2",
    "time": "01:27:01"
    },
    {
      "name": "Grupp 3",
      "time": "01:20:58"
     }
]

async function handleRequest(request) {
    const pathname = new URL(request.url).pathname

    if(pathname.startsWith("/static")) {
            return serveDir(request, {
                fsRoot: "assets",
                urlRoot: "static"
            })
        }

            if (pathname == "/api/grupper")
                {
                    const options = {
                        headers: {"Content-Type": "application/json"}
                    }
                    if (request.method == "GET") {
                        return new Response(JSON.stringify(GRUPPER), options)
                    }

                    if (request.method == "POST") {
                        const grupp = await request.json()
                        GRUPPER.push(grupp)
                        return new Response(JSON.stringify(grupp), options)
                    }

                    if (request.method == "DELETE") {
                        
                    }
                }
                return serveFile(request, "./index.html")
        }


Deno.serve(handleRequest) 