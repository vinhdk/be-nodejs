import { Application } from "express";
import { Sequelize, Model } from "sequelize-typescript";
import { useAbtractRouter } from "src/be-shared/routers";
import { UserRole } from "src/be-models";
import { UserRoleCM, UserRoleUM, UserRoleVM } from "src/be-view-models";
import { environment } from "src/be-warehouse/environment";

export const useUserRoleRouter = (app: Application, sequelize: Sequelize) => {
    useAbtractRouter<any, UserRole, UserRoleCM, UserRoleUM, UserRoleVM>(app, sequelize, {
        haveChild: false,
        content: {
            model: UserRole,
            dataCM: UserRoleCM,
            dataUM: UserRoleUM,
            dataVM: UserRoleVM,
        },
        api: {
            main: environment.apiLink.basic.userRole.main,
            byId: environment.apiLink.basic.userRole.getById,
        },
    });
};
