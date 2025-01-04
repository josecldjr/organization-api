import { Router } from "express";
import { CreateUserUseCase } from "../../app/usecases/create-user.action";
import { emailLoginInputSchema } from "../../app/validation/email-login.validation";
import { validatePayload } from "../middleware/validation";
import { UserRepository } from "../repository/user.repository";
import { EmailLoginUsecase } from "../../app/usecases/email-login.action";

export const authRouter = Router();

authRouter.post('/', validatePayload({ body: emailLoginInputSchema }), async (req, res) => {
    const input = req.body
    const useCase = new EmailLoginUsecase(new UserRepository)

    const response = await useCase.run(input)
    res.json(response)
})



