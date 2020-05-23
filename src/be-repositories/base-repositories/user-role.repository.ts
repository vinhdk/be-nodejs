import { Sequelize } from "sequelize-typescript";
import { AbtractRepository } from "src/be-shared/repositories";
import { UserRole } from "src/be-models";
import { IUserRoleRepository } from "src/be-interfaces";

export class UserRoleRepository extends AbtractRepository<UserRole> implements IUserRoleRepository {
    constructor(sequelize: Sequelize) {
        super(UserRole, sequelize);
    }
}
