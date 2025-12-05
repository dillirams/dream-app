import { Router } from "express";
import { signup } from "../controller/signup.js";
import { signin } from "../controller/signin.js";
import { middleware } from "../middleware/middleware.js";
import { postDream } from "../controller/post.js";
import { getDream } from "../controller/get.js";
export const appRouter = Router();
appRouter.post('/signup', signup);
appRouter.post('/signin', signin);
appRouter.post('/post', middleware, postDream);
appRouter.get('/getdream', middleware, getDream);
//# sourceMappingURL=route.js.map