import { Sequelize } from "sequelize-typescript";
import { NextFunction, Request, Response } from "express";
import { IAuthController, IAuthService } from "src/be-interfaces";
import { IAbtractService } from "src/be-shared/interfaces";
import { User, UserRole, Role } from "src/be-models";
import { AbtractService } from "src/be-shared/services";
import { AuthGM, AuthVM } from "src/be-view-models";
import { compareSync } from "bcrypt";
import { AuthService } from "src/be-services";

export class AuthController implements IAuthController {
    protected readonly service: IAuthService;
    protected readonly userService: IAbtractService<User>;
    protected readonly roleService: IAbtractService<Role>;
    protected readonly childService: IAbtractService<UserRole>;
    constructor(sequelize: Sequelize) {
        this.service = new AuthService(sequelize);
        this.userService = new AbtractService<User>(User, sequelize);
        this.roleService = new AbtractService<Role>(Role, sequelize);
        this.childService = new AbtractService<UserRole>(UserRole, sequelize);
    }
    public readonly useCheckToken = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
        const user = JSON.parse(req.headers.extra as string);
        return res.status(200).json(AuthVM.generateData(user));
    }
    public readonly useLogin = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
        const account: AuthGM = AuthGM.generateData(req.body);
        return await this.userService.useGetOne({ UserName: account.UserName }, [])
            .then(async (user) => {
                if (user) {
                    if (compareSync(account.PassWord, user.PassWordHash)) {
                        return res.status(200).json({
                            AccessToken: this.service.useGenerateToken(user.UserName, ""),
                            ExpiresIn: "24h",
                        });
                    } else {
                        return res.status(400).json({ message: "Sai mật khẩu" });
                    }
                } else {
                    return res.status(404).json({ message: "Tài khoản không tồn tại" });
                }
            })
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }

}
