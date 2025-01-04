import { Router } from "express";
import { authenticateJWT } from "../middleware/authentication";
import { retrieveTokenData } from "../helpers/auth";

export const organizationRouter = Router();

organizationRouter.use(authenticateJWT)
organizationRouter.get('/', async (req, res) => {
    const userId = retrieveTokenData(req).userId

    res.json()
})

