import { IAbtractRepository, IAbtractService } from "src/be-shared/interfaces";
import { Role } from "src/be-models/base-models";

export interface IRoleRepository extends IAbtractRepository<Role> {
}

export interface IRoleService extends IAbtractService<Role> {
}
