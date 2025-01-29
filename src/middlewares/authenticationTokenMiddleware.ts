import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { unauthorizedError } from '@/erros/unauthorizedRrror';
import { authenticationRepository } from '@/repositories/authenticationTokenRepository';

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.header('Authorization');
    if (!authHeader) throw unauthorizedError();

    const token = authHeader.split(' ')[1];
    if (!token) throw unauthorizedError();

    const session = await authenticationRepository.findSession(token);
    if (session) {
        const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;
        req.userId = userId;
    }
   
    if (!session) throw unauthorizedError();
    next();
}

export type AuthenticatedRequest = Request & {
    userId?: number;
    representativeId?: number;
};

type JWTPayload = {
    userId: number;
};