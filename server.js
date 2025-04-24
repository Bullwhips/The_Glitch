import { serveDir, serveFile } from "jsr:@std/http/file-server";

let GRUPPER = []

const grupperData = await Deno.readTextFile("./assets/database.json")
GRUPPER = JSON.parse(grupperData)

async function updateDatabase(grupper) {
    const grupperData = JSON.stringify(grupper, null, 2)
    await Deno.writeTextFile("./assets/database.json", grupperData)
}

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
                        grupp.id = GRUPPER.reduce((acc, next) => next.id > acc ? acc = next.id : acc, 0) + 1
                        grupp.time = ""
                        GRUPPER.push(grupp)
                        updateDatabase(GRUPPER)
                        return new Response(JSON.stringify(grupp), options)
                    }

                    if (request.method == "DELETE") {
                        
                        const data = await request.json()
                        const grupp = GRUPPER.find(grupp => grupp.id == data.id)
                       if (grupp == undefined) {
                        return new Response("", {status: 404})
                       }

                        GRUPPER = GRUPPER.filter((grupp) => grupp.id != data.id)
                        updateDatabase(GRUPPER)
                        return new Response(JSON.stringify(grupp), options)
                    }
                }
                return serveFile(request, "./index.html")
        }


Deno.serve(handleRequest) 