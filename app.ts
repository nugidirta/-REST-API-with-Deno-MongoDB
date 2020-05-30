import { Application } from "https://deno.land/x/oak/mod.ts";
import { router } from "./router/router.ts";

const app = new Application();
const PORT = 8000;

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: PORT });
