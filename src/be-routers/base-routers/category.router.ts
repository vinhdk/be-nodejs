import { Application } from "express";
import { Sequelize, Model } from "sequelize-typescript";
import { useAbtractRouter } from "src/be-shared/routers";
import { Category, Product } from "src/be-models";
import { CategoryCM, CategoryUM, CategoryVM } from "src/be-view-models";
import { environment } from "src/be-warehouse/environment";

export const useCategoryRouter = (app: Application, sequelize: Sequelize) => {
    useAbtractRouter<Category, Product, CategoryCM, CategoryUM, CategoryVM>(app, sequelize, {
        haveChild: true,
        content: {
            model: Category,
            childModel: Product,
            dataCM: CategoryCM,
            dataUM: CategoryUM,
            dataVM: CategoryVM,
        },
        api: {
            main: environment.apiLink.basic.category.main,
            byId: environment.apiLink.basic.category.getById,
        },
    });
};
