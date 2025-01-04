import { JwtPayload } from "./jwt";

export function retrieveTokenData(req: Express.Request): JwtPayload {
    // @ts-ignore
    return req.token
}