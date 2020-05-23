import { Sequelize } from "sequelize-typescript";
import { AbtractRepository } from "src/be-shared/repositories";
import { Product } from "src/be-models";
import { IProductRepository } from "src/be-interfaces";

export class ProductRepository extends AbtractRepository<Product> implements IProductRepository {
    constructor(sequelize: Sequelize) {
        super(Product, sequelize);
    }
}
