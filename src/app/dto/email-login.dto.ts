import { IUser } from "../../domain/models/IUser"

export type EmailLoginInputDto = {
    email: string
    password: string
}

export type EmailLoginResponseDto = {
    token: string
    expiration: Date
    loginAt: Date
    user: IUser
}