import { Sequelize } from "sequelize-typescript";
import { AbtractRepository } from "src/be-shared/repositories";
import { Category } from "src/be-models";
import { ICategoryRepository } from "src/be-interfaces";

export class CategoryRepository extends AbtractRepository<Category> implements ICategoryRepository {
    constructor(sequelize: Sequelize) {
        super(Category, sequelize);
    }
}
