import { IAbtractRepository, IAbtractService } from "src/be-shared/interfaces";
import { Product } from "src/be-models/base-models";

export interface IProductRepository extends IAbtractRepository<Product> {
}

export interface IProductService extends IAbtractService<Product> {
}
