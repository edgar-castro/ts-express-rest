import { Router } from "express";

import { getPing } from "../controllers/ping";

const pingRouter = Router()

pingRouter.get('/', getPing)

export default pingRouter