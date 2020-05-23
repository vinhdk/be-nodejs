import { IAbtractRepository, IAbtractService } from "src/be-shared/interfaces";
import { Category } from "src/be-models/base-models";

export interface ICategoryRepository extends IAbtractRepository<Category> {
}

export interface ICategoryService extends IAbtractService<Category> {
}
