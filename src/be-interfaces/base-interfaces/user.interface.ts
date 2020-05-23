import { IAbtractRepository, IAbtractService } from "src/be-shared/interfaces";
import { User } from "src/be-models/base-models";

export interface IUserRepository extends IAbtractRepository<User> {
}

export interface IUserService extends IAbtractService<User> {
}
