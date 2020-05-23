import { AbtractService } from "src/be-shared/services";
import { Category } from "src/be-models";
import { ICategoryService } from "src/be-interfaces";
import { Sequelize } from "sequelize-typescript";

export class CategoryService extends AbtractService<Category> implements ICategoryService {
    constructor(sequelize: Sequelize) {
        super(Category, sequelize);
    }

}
