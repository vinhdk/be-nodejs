import { NextFunction, Request, Response } from "express";
export interface IAuthService {
    useGenerateToken: (username: string, role: string) => string;
    useAuthorzie: (req: Request, res: Response, next: NextFunction) => void;
}

export interface IAuthController {
    useCheckToken: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
    useLogin: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
}
