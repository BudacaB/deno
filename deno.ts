import { serve } from "https://deno.land/std@0.55.0/http/server.ts";

const server = serve({port: 3000});

/// async iterables - like an infinite loop of incoming events/data 
for await(const req of server) {
    console.log('Incoming request');
    req.respond({body: 'Hello from Deno!'});
}