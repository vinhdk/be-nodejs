import { NextFunction, Request, Response } from "express";
import { IAuthService } from "src/be-interfaces";
import { Sequelize, Repository } from "sequelize-typescript";
import { sign, verify } from "jsonwebtoken";
import { environment } from "src/be-warehouse/environment";
import { IAbtractRepository } from "src/be-shared/interfaces";
import { User, UserRole } from "src/be-models";
import { AbtractRepository } from "src/be-shared/repositories";

export class AuthService implements IAuthService {
    protected readonly repository: IAbtractRepository<User>;
    protected readonly childRepository: Repository<UserRole>;
    constructor(sequelize: Sequelize) {
        this.repository = new AbtractRepository<User>(User, sequelize);
        this.childRepository = sequelize.getRepository(UserRole);
    }
    public readonly useGenerateToken = (username: string, role: string): string => {
        return sign({ role }, environment.jwt.code, { expiresIn: "24h", audience: username, issuer: environment.jwt.issue, subject: environment.jwt.subject });
    }

    public readonly useAuthorzie = async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ error: "Có vẻ bạn chưa đăng nhập. Vui lòng đăng nhập" });
        } else {
            try {
                const decoded = verify(token + "", environment.jwt.code, { issuer: environment.jwt.issue, subject: environment.jwt.subject });
                const username = Object.assign(decoded.valueOf()).aud;
                await this.repository.useGetOne({ UserName: username }, [this.childRepository])
                    .then(async (user) => {
                        if (user) {
                            req.headers.extra = JSON.stringify({ ...user.get() });
                            next();
                        } else {
                            return res.status(404).json({ error: "Tài khoản không tồn tại" });
                        }
                    })
                    .catch((err) => {
                        return res.status(400).json({ error: "Có lỗi xảy ra" });
                    });
            } catch (ex) {
                return res.status(400).json({ error: "Tài khoản không thuộc hệ thống" });
            }
        }
    }
}
