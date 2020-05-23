import { IAbtractRepository, IAbtractService } from "src/be-shared/interfaces";
import { UserRole } from "src/be-models/base-models";

export interface IUserRoleRepository extends IAbtractRepository<UserRole> {
}

export interface IUserRoleService extends IAbtractService<UserRole> {
}
