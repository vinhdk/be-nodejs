import { Application } from "express";
import { Sequelize, Model } from "sequelize-typescript";
import { useAbtractRouter } from "src/be-shared/routers";
import { Role, UserRole } from "src/be-models";
import { RoleCM, RoleUM, RoleVM } from "src/be-view-models";
import { environment } from "src/be-warehouse/environment";

export const useRoleRouter = (app: Application, sequelize: Sequelize) => {
    useAbtractRouter<Role, UserRole, RoleCM, RoleUM, RoleVM>(app, sequelize, {
        haveChild: true,
        content: {
            model: Role,
            childModel: UserRole,
            dataCM: RoleCM,
            dataUM: RoleUM,
            dataVM: RoleVM,
        },
        api: {
            main: environment.apiLink.basic.role.main,
            byId: environment.apiLink.basic.role.getById,
        },
    });
};
