import express, { Request, Response } from "express";
require('express-async-errors');
import { userRouter } from './src/infrastructure/route/user.routes';
import { prisma } from "./src/infrastructure/database/connection";
import { authRouter } from "./src/infrastructure/route/auth.routes";
import { errorHandler } from "./src/infrastructure/middleware/error-handler";
import { organizationRouter } from "./src/infrastructure/route/organization.routes";
import { responseFilter } from "./src/infrastructure/middleware/sucess-response";
import { faclitiesRouter } from "./src/infrastructure/route/facilities.routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(responseFilter)
app.get("/health", (req: Request, res: Response) => {
    res.send("ok");
})
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/organization", organizationRouter);
app.use("/facility", faclitiesRouter);

app.use(errorHandler)

async function main() {
    app.listen(port, () => {
        console.log(`started server at port ${port}`)
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()

    })
    .catch(async (e) => {
        console.log('error', e);

        await prisma.$disconnect()

    })
