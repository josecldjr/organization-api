import express, { Request, Response } from "express";
import { userRouter } from './src/infrastructure/route/user.routes';
import { prisma } from "./src/infrastructure/database/connection";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
    res.send("ok");
})


async function main() {
    app.listen(port, () => {
        console.log(`started server at port ${port}`)
    })

    app.use("/user", userRouter);
}

main()
    .then(async () => {
        await prisma.$disconnect()

    })
    .catch(async (e) => {
        console.log('error', e);

        await prisma.$disconnect()

    })
