import { Application } from "express";
import { AuthService } from "src/be-services";
import { environment } from "src/be-warehouse/environment";
import { Sequelize } from "sequelize-typescript";
import { AuthController } from "src/be-controllers";

export const useAuthRouter = (app: Application, sequelize: Sequelize) => {
    const AUTH = new AuthService(sequelize).useAuthorzie;
    const CONTROLLER = new AuthController(sequelize);
    app.route(environment.apiLink.extra.auth.main)
        .get(AUTH, (req, res, next) => {
            CONTROLLER.useCheckToken(req, res, next);
        });
    app.route(environment.apiLink.extra.auth.token)
        .post((req, res, next) => {
            CONTROLLER.useLogin(req, res, next);
        });
};
