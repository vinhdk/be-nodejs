import { Application } from "express";
import { Sequelize, Model } from "sequelize-typescript";
import { useAbtractRouter } from "src/be-shared/routers";
import { User, UserRole } from "src/be-models";
import { UserCM, UserUM, UserVM } from "src/be-view-models";
import { environment } from "src/be-warehouse/environment";

export const useUserRouter = (app: Application, sequelize: Sequelize) => {
    useAbtractRouter<User, UserRole, UserCM, UserUM, UserVM>(app, sequelize, {
        haveChild: true,
        content: {
            model: User,
            childModel: UserRole,
            dataCM: UserCM,
            dataUM: UserUM,
            dataVM: UserVM,
        },
        api: {
            main: environment.apiLink.basic.user.main,
            byId: environment.apiLink.basic.user.getById,
        },
    });
};
