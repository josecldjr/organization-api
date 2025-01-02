import { Router } from "express";
import { CreateUserUserCase } from "../../app/usecases/create-user";
import { UserRepository } from "./repository/user.repository";

export const userRouter = Router();

userRouter.post('/', async (req, res) => {

    const input = req.body
    const useCase = new CreateUserUserCase(new UserRepository)

    const response = await useCase.run(input)
    res.json(response)
})


userRouter.get('/', async (req, res) => {
    const input = req.body
    console.log('LOG', input);
    const useCase = new CreateUserUserCase(new UserRepository)

    const Response = await useCase.run(input)
})

