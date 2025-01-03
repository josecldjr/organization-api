import { Router } from "express";
import { CreateUserUserCase } from "../../app/usecases/create-user.action";
import { UserRepository } from "../repository/user.repository";
import { validatePayload } from "../helpers/validation";
import { createUserValidation } from "../../app/validation/create-user.validation";

export const userRouter = Router();
userRouter.post('/', validatePayload({ body: createUserValidation }), async (req, res) => {
    const input = req.body
    const useCase = new CreateUserUserCase(new UserRepository)

    const response = await useCase.run(input)
    res.json(response)
})


userRouter.get('/', async (req, res) => {
    res.send('')
})

