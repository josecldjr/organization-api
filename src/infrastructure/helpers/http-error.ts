
export class HttpError extends Error {
    statusCode: number;
    data: Record<string, any>;

    constructor(statusCode: number, message: string, data: Record<string, any> = {}) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HttpError);
        }
    }
}

export class InternalServerError extends HttpError {
    constructor(message: string, data: Record<string, any> = {}) {
        super(500, message, data);
    }
}

export class BadRequestError extends HttpError {
    constructor(message: string, data: Record<string, any> = {}) {
        super(400, message, data);
    }
}

export class UnauthorizedError extends HttpError {
    constructor(message: string, data: Record<string, any> = {}) {
        super(401, message, data);
    }
}

export class ForbiddenError extends HttpError {
    constructor(message: string, data: Record<string, any> = {}) {
        super(403, message, data);
    }
}
