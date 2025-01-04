import { Router } from "express";
import { authenticateJWT } from "../middleware/authentication";
import { retrieveTokenData } from "../helpers/auth";
import { validatePayload } from "../middleware/validation";
import { createOrganizationValidation } from "../../app/validation/create-organization.validation";
import { OrganizationRepository } from "../repository/organization.repository";
import { CreateOrganizationUseCase } from "../../app/usecases/create-organization.action";
import { GetOrganizationUseCase } from "../../app/usecases/get-organization.action";

export const organizationRouter = Router();

organizationRouter.post('/', validatePayload({ body: createOrganizationValidation }), async (req, res) => {
    const useCase = new CreateOrganizationUseCase(new OrganizationRepository)

    res.json(await useCase.run(req.body))
})
organizationRouter.use(authenticateJWT)
organizationRouter.get('/', async (req, res) => {
    const organizationId = retrieveTokenData(req).organizationId
    const useCase = new GetOrganizationUseCase(new OrganizationRepository)

    res.json(await useCase.run({ id: organizationId }))
})

