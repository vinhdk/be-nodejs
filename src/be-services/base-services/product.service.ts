import { AbtractService } from "src/be-shared/services";
import { Product } from "src/be-models";
import { IProductService } from "src/be-interfaces";
import { Sequelize } from "sequelize-typescript";

export class ProductService extends AbtractService<Product> implements IProductService {
    constructor(sequelize: Sequelize) {
        super(Product, sequelize);
    }

}
