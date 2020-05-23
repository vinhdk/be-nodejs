import { Sequelize } from "sequelize-typescript";
import { AbtractNoChildController } from "src/be-shared/controllers";
import { Product } from "src/be-models";
import { ProductCM, ProductUM, ProductVM } from "src/be-view-models";

export class ProductController extends AbtractNoChildController<Product, ProductCM, ProductUM, ProductVM> {
    constructor(sequelize: Sequelize) {
        super(
            sequelize,
            Product,
            ProductCM,
            ProductUM,
            ProductVM,
        );
    }
}
