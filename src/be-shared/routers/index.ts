import { Application } from "express";
import { Sequelize, Model } from "sequelize-typescript";
import { AbtractHaveChildController, AbtractNoChildController } from "../controllers";
import { AuthService } from "src/be-services";
import { environment } from "src/be-warehouse/environment";

export const useAbtractRouterBase = <F extends Model, C extends Model, CM, UM, VM>(
    app: Application,
    sequelize: Sequelize,
    options: {
        haveChild: boolean, content: {
            model: new () => F,
            childModel?: new () => C,
            dataCM: new () => CM,
            dataUM: new () => UM,
            dataVM: new () => VM,
        }, api: { main: string, byId: string },
    },
) => {
    const AUTH = new AuthService(sequelize).useAuthorzie;
    const CONTROLLER = options.haveChild
        ? new AbtractHaveChildController<F, C, CM, UM, VM>(
            sequelize, options.content.model,
            options.content.childModel || {} as new () => C,
            options.content.dataCM,
            options.content.dataUM,
            options.content.dataVM,
        )
        : new AbtractNoChildController<F, CM, UM, VM>(
            sequelize, options.content.model,
            options.content.dataCM,
            options.content.dataUM,
            options.content.dataVM,
        );
    app.route(options.api.main)
        .get(AUTH, (req, res, next) => {
            CONTROLLER.useGetAll(req, res, next);
        })
        .post(AUTH, (req, res, next) => {
            CONTROLLER.useCreate(req, res, next);
        })
        .put(AUTH, (req, res, next) => {
            CONTROLLER.useUpdate(req, res, next);
        });
    app.route(options.api.byId)
        .get(AUTH, (req, res, next) => {
            CONTROLLER.useGetById(req, res, next);
        })
        .delete(AUTH, (req, res, next) => {
            CONTROLLER.useRemove(req, res, next);
        });
};
