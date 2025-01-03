

export type CreateUserInputDTO = {
    name: string
    email: string
    password: string
}

export type CreateUserResponseDto = {
    id: string
    name: string
    email: string
}