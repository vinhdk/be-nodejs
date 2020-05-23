import { Sequelize } from "sequelize-typescript";
import { AbtractHaveChildController } from "src/be-shared/controllers";
import { Category, Product } from "src/be-models";
import { CategoryCM, CategoryUM, CategoryVM } from "src/be-view-models";

export class CategoryController extends AbtractHaveChildController<Category, Product, CategoryCM, CategoryUM, CategoryVM> {
    constructor(sequelize: Sequelize) {
        super(
            sequelize,
            Category,
            Product,
            CategoryCM,
            CategoryUM,
            CategoryVM,
        );
    }
}
