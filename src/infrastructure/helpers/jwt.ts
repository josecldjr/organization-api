import jwt from "jsonwebtoken"
const JWT_SECRET = "randomsecretlalalala" // put this in .env later
const JWT_EXPIRATION = "1h"
import ms from "ms"

export interface JwtPayload {
    userId: string
    username: string
    organizationId: string
}

interface JwtResponse {
    token: string
    expiresAt: Date
}

export function verifyJwt(token: string): JwtPayload | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
        return decoded
    } catch (error) {
        return null
    }
}

export function generateJwt(userId: string, username: string, organizationId: string): JwtResponse {
    const payload: JwtPayload = { userId, username, organizationId }

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION })

    const expiresInMs = ms(JWT_EXPIRATION)
    const expiresAt = new Date(Date.now() + expiresInMs)

    return { token, expiresAt }
}