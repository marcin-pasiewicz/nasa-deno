import {Router} from "https://deno.land/x/oak@v5.4.0/mod.ts"
import * as planets from "./models/platents.ts";

const router = new Router();

router.get("/", (ctx) => {
    ctx.response.body = "Misson Control API";
})

router.get("/planets", (ctx) => {
    ctx.response.body = planets.getAll();
})

export default router