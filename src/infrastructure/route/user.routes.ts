import { Router } from "express";
import { CreateUserUseCase } from "../../app/usecases/create-user.action";
import { UserRepository } from "../repository/user.repository";
import { validatePayload } from "../middleware/validation";
import { createUserValidation } from "../../app/validation/create-user.validation";

export const userRouter = Router();
userRouter.post('/', validatePayload({ body: createUserValidation }), async (req, res) => {
    const input = req.body
    const useCase = new CreateUserUseCase(new UserRepository)

    const response = await useCase.run(input)
    res.json(response)
})


userRouter.get('/', async (req, res) => {
    res.send('')
})

