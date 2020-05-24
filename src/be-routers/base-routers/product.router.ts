import { Application } from "express";
import { Sequelize, Model } from "sequelize-typescript";
import { useAbtractRouterBase } from "src/be-shared/routers";
import { Product } from "src/be-models";
import { ProductCM, ProductUM, ProductVM } from "src/be-view-models";
import { environment } from "src/be-warehouse/environment";

export const useProductRouter = (app: Application, sequelize: Sequelize) => {
    useAbtractRouterBase<any, Product, ProductCM, ProductUM, ProductVM>(app, sequelize, {
        haveChild: false,
        content: {
            model: Product,
            dataCM: ProductCM,
            dataUM: ProductUM,
            dataVM: ProductVM,
        },
        api: {
            main: environment.apiLink.basic.product.main,
            byId: environment.apiLink.basic.product.getById,
        },
    });
};
