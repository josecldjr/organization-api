import { Router } from "express";
import { CreateFacilityAction } from "../../app/usecases/facilities/create-facility.action";
import { retrieveTokenData } from "../helpers/auth";
import { authenticateJWT } from "../middleware/authentication";
import { validatePayload } from "../middleware/validation";
import { FacilityRepository } from "../repository/facility.repository";
import { createFacilityValidation } from "../../app/validation/facilities/create-facility.validation";
import { UpdateFacilityAction } from "../../app/usecases/facilities/update-facility.action";
import { updateFacilityValidation } from "../../app/validation/facilities/update-facility.validation";
import { RemoveFacilityAction } from "../../app/usecases/facilities/remove-facility.action";
import { deleteFacilityValidation } from "../../app/validation/facilities/delete-facility.validation";

export const faclitiesRouter = Router();

faclitiesRouter.use(authenticateJWT)

faclitiesRouter.post('/', validatePayload({ body: createFacilityValidation }), async (req, res) => {
    const input = req.body
    const useCase = new CreateFacilityAction(new FacilityRepository)

    const response = await useCase.run(input)
    res.json(response)
})

faclitiesRouter.put('/:id', validatePayload({ body: updateFacilityValidation }), async (req, res) => {
    const input = req.body
    const auth = retrieveTokenData(req)
    const useCase = new UpdateFacilityAction(new FacilityRepository)

    const response = await useCase.run({
        ...input,
        organizationId: auth.organizationId
    })
    res.json(response)
})

faclitiesRouter.delete('/:id', validatePayload({ body: deleteFacilityValidation }), async (req, res) => {
    const input = req.body
    const auth = retrieveTokenData(req)
    const useCase = new RemoveFacilityAction(new FacilityRepository)

    const response = await useCase.run({
        id: input.id,
        organizationId: auth.organizationId
    })
    res.json(response)
})


faclitiesRouter.get('/', async (req, res) => {
    res.json(retrieveTokenData(req))
})

