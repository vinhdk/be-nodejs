import { Sequelize } from "sequelize-typescript";
import { AbtractRepository } from "src/be-shared/repositories";
import { Role } from "src/be-models";
import { IRoleRepository } from "src/be-interfaces";

export class RoleRepository extends AbtractRepository<Role> implements IRoleRepository {
    constructor(sequelize: Sequelize) {
        super(Role, sequelize);
    }
}
