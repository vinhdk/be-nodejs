import { Application } from "express";
import { Sequelize, Model } from "sequelize-typescript";
import { AbtractHaveChildController, AbtractNoChildController } from "../controllers";

export const useAbtractRouter = <F extends Model, C extends Model, CM, UM, VM>(
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
        .get((req, res, next) => {
            CONTROLLER.useGetAll(req, res, next);
        })
        .post((req, res, next) => {
            CONTROLLER.useCreate(req, res, next);
        })
        .put((req, res, next) => {
            CONTROLLER.useUpdate(req, res, next);
        });
    app.route(options.api.byId)
        .get((req, res, next) => {
            CONTROLLER.useGetById(req, res, next);
        })
        .delete((req, res, next) => {
            CONTROLLER.useRemove(req, res, next);
        });
};
