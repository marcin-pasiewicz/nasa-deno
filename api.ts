import { Router } from "./deps.ts";
import * as planets from "./models/platents.ts";
import * as launches from "./models/launches.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Misson Control API";
});

router.get("/planets", (ctx) => {
  ctx.response.body = planets.getAll();
});
router.get("/launches", (ctx) => {
  ctx.response.body = launches.getAll();
});
router.get("/launches/:id", (ctx) => {
  const { id } = ctx?.params;
  if (id) {
    const launchesList = launches.getOne(Number(id));
    if (launchesList) {
      ctx.response.body = launchesList;
    } else {
      ctx.throw(400, "Launch with that id does not exist");
    }
  }
});

router.post("/launches", async (ctx) => {
  const body = await ctx.request.body();
  launches.addOne(body.value);
  ctx.response.body = { success: true };
  ctx.response.status = 201;
});

router.delete("/launches/:id", (ctx) => {
  const { id } = ctx?.params;
  if (id) {
    const result = launches.removeOne(Number(id));
    ctx.response.body = { sucess: result };
  } else {
    ctx.throw(400, "Launch with that id does not exist");
  }
});

export default router;
