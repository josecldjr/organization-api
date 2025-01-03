import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return await bcrypt.hash(password, salt);
}

export async function comparePassword(
    plainText: string,
    hashedPassword: string
): Promise<boolean> {
    return await bcrypt.compare(plainText, hashedPassword);
}