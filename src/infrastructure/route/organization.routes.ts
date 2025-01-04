import { Router } from "express";
import { CreateOrganizationUseCase } from "../../app/usecases/create-organization.action";
import { GetOrganizationUseCase } from "../../app/usecases/get-organization.action";
import { UpdatePccConfigurationUseCase } from "../../app/usecases/update-pcc-configuration.action";
import { createOrganizationValidation } from "../../app/validation/create-organization.validation";
import { updatPccConfigurationValidation } from "../../app/validation/update-pcc-configuration.validation";
import { retrieveTokenData } from "../helpers/auth";
import { authenticateJWT } from "../middleware/authentication";
import { validatePayload } from "../middleware/validation";
import { OrganizationRepository } from "../repository/organization.repository";
import { PccConfigurationRepository } from "../repository/pcc-configuration.repository";
import { ListOrganizationsUseCase } from "../../app/usecases/list-organizations.action";

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

organizationRouter.get('/all', async (req, res) => {
    const useCase = new ListOrganizationsUseCase(new OrganizationRepository)

    res.json(await useCase.run())
})


organizationRouter.put('/pcc-config', validatePayload({ body: updatPccConfigurationValidation }), async (req, res) => {
    const organizationId = retrieveTokenData(req).organizationId
    const body = req.body
    const useCase = new UpdatePccConfigurationUseCase(new PccConfigurationRepository)

    res.json(await useCase.run({ ...body, organizationId }))
})

